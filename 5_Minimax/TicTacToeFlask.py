#!/usr/bin/python3
from flask import Flask, render_template, session, request, redirect, url_for
from TicTacToeBoard import TicTacToeBoard
import numpy as np
import jsonpickle

app = Flask(__name__)
app.secret_key = 'super secret key'


@app.route('/')
def main():
	return render_template('choose_side.html')

@app.route('/choose_side',methods=['GET', 'POST'])
def choose_side():
	session['current_board'] = jsonpickle.encode(TicTacToeBoard())
	if request.form['side'] == 'X':
		session['player_symbol'] = 'X'
		session['ai_symbol'] = 'O'
	else:
		session['player_symbol'] = 'O'
		session['ai_symbol'] = 'X'

	if request.form['difficulty'] == 'hard':
		session['difficulty'] ='hard'
	else:
		session['difficulty'] = 'easy'
	#return render_template('index.html', board=current_board.board)
	return redirect(url_for('index'))

@app.route('/index')
def index():
	current_board = jsonpickle.decode(session.get('current_board'))
	ai_symbol = session.get('ai_symbol')
	if session.get('ai_symbol') == 'X':
		if session.get('difficulty') == 'easy':
			ai_row, ai_col = easy_ai_player_turn()
		else:
			ai_row, ai_col = hard_ai_player_turn()
		ai_outcome = current_board.execute_turn(ai_symbol, ai_row, ai_col)
	session['current_board'] = jsonpickle.encode(current_board)
	return render_template('index.html', board=current_board.board)

@app.route('/play_turn', methods=['GET', 'POST'])
def play_turn():
	row_num = int(request.form['row'])
	col_num = int(request.form['col'])

	current_board = jsonpickle.decode(session.get('current_board'))
	difficulty = session.get('difficulty')
	ai_symbol = session.get('ai_symbol')
	player_symbol = session.get('player_symbol')
	if 1<=row_num<=3 and 1<=col_num<=3 and current_board.board[row_num-1][col_num-1] == 0:
		if not current_board.game_is_won() and current_board.num_open_spaces() > 0:
			outcome_1 = current_board.execute_turn(player_symbol, row_num-1, col_num-1)

		session['current_board'] = jsonpickle.encode(current_board)
		current_board = jsonpickle.decode(session.get('current_board'))

		if not current_board.game_is_won() and current_board.num_open_spaces() > 0:
			if difficulty == 'easy':
				ai_row, ai_col = easy_ai_player_turn()
			else:
				ai_row, ai_col = hard_ai_player_turn()
			ai_outcome = current_board.execute_turn(ai_symbol, ai_row, ai_col)

	session['current_board'] = jsonpickle.encode(current_board)
	return render_template('index.html', board=current_board.board)


def easy_ai_player_turn():
	# Returns (row, col) coordinates 
	# Strategy #1 - Just return random positions
	# that are open for new moves
	valid_combo = False
	current_board = jsonpickle.decode(session.get('current_board'))
	while not valid_combo:
		row = np.random.randint(0,3)
		col = np.random.randint(0,3)
		if current_board.board[row][col] == 0:
			valid_combo = True
	return (row, col)

def hard_ai_player_turn():
	# Returns (row, col) coordinates 
	# Strategy #2 - return minimax based 
	# positions for the new moves
	current_board = jsonpickle.decode(session.get('current_board'))
	ai_symbol =  session.get('ai_symbol')
	return minimax(current_board, ai_symbol)


# Minimax function we will call when the 'Hard' AI player 
# is chosen.
def minimax(board, player):
	best_score = float('inf')
	best_move = None
	if player == 'X':
		best_score = float('-inf')
	for possible_move in board.get_possible_moves():
		current_row, current_col = possible_move
		new_board = board.make_move(player, current_row, current_col)
		print(new_board.board)
		if player == 'X':
			score = minimizer(new_board)
			if score > best_score:
				best_score = score
				best_move = (current_row, current_col)
		else:
			score = maximizer(new_board)
			print(score)
			if score < best_score:
				best_score = score
				best_move = (current_row, current_col)
			print("")
 
	return best_move


def minimizer(board):
	# Current player is assumed to be 'O' here
	current_score = board.calculate_board_score()
	if current_score != 0 or board.num_open_spaces() == 0:
		return current_score 
	average_score = 0.0
	for possible_move in board.get_possible_moves():
		current_row, current_col = possible_move
		new_board = board.make_move('O', current_row, current_col)
		score = maximizer(new_board)
		#print("Maximizer Score = " + str(score))
		#lowest_score = min(lowest_score, score)
		average_score+=score
	return average_score/len(board.get_possible_moves())


def maximizer(board):
	# Current player is assumed to be 'X' here
	current_score = board.calculate_board_score()
	if current_score != 0 or board.num_open_spaces() == 0:
		return current_score 
	highest_score = float("-inf")
	for possible_move in board.get_possible_moves():
		current_row, current_col = possible_move
		new_board = board.make_move('X', current_row, current_col)
		score = minimizer(new_board)
		#print("Minimizer Score = " + str(score))
		highest_score = max(highest_score, score)
	return highest_score


if __name__ == "__main__":
    app.run()






