from TicTacToeBoard import TicTacToeBoard
from copy import copy, deepcopy
from BoardNode import BoardNode
from numpy.random import randint

class Minimax:
	def __init__(self, my_board):
		self.board = my_board.board

	def calculate_score(self, board):
		# Returns the score of the current board with respect to
		# the player playing 'X'
		player_O_wins = False
		player_X_wins = False

		for row in range(3):
			if board[row][0] == board[row][1] and board[row][1] == self.board[row][2]:
				if board[row][0] == 1:
					return 10
				elif board[row][0] == 2:
					return -10

		for col in range(3):
			if board[0][col] == board[1][col] and board[1][col] == board[2][col]:
				if board[0][col] == 1:
					return 10
				elif board[0][col] == 2:
					return -10

		if board[0][0] == board[1][1] and board[1][1] == board[2][2]:
			if board[0][0] == 1:
				return 10
			elif board[0][0] == 2:
				return -10

		if board[2][0] == board[1][1] and board[1][1] == board[0][2]:
			if board[2][0] == 1:
				return 10
			elif board[2][0] == 2:
				return -10

		#print("Player X Wins = ", str(player_X_wins))
		#print("Player O Wins = ", str(player_O_wins))

		return 0


	def print_boards(self, level_boards):
		for board in level_boards:
			print(board.board_score)
			print(board.board)
			print("")

tic_tac_toe_board = TicTacToeBoard()
minimax = Minimax(tic_tac_toe_board)

num_turns = 0

while not tic_tac_toe_board.game_is_won() and num_turns < 9:
	minimax_X_tree = minimax.build_tree('X')
	chosen_move_1 = minimax.choose_X_move(minimax_X_tree)
	tic_tac_toe_board.board = chosen_move_1.board

	minimax_O_tree = minimax.build_tree('O')


	num_turns+=1

'''level1_children = minimax_step1_tree.children
for child in level1_children:
	print(child.board_score)
	print(child.board)
	print(child.children)
	print("")'''