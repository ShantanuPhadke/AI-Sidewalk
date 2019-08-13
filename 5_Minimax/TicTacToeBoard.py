class TicTacToeBoard:
	def __init__(self):
		# 3 possible states per board square
		# (i)   0 - blank square
		# (ii)  1 - X  entry
		# (iii) 2 - O entry
		self.board = [[0 for col in range(3)] for row in range(3)]
		self.board_score = 0

	def execute_turn(self, symbol, row, col):
		# Checks if (row, col) in board is currently blank (0)
		# It then fills (row, col) in board with either a 1 (X)
		# OR a 2 (O)

		# Also updates the history variable with the possible
		# moves that can be executed

		# Returns True if executing the turn was successful
		# Returns False if executing the turn was unsuccessful
		if self.board[row][col] == 0:
			if symbol == 'X':
				self.board[row][col] = 1
				return True
			elif symbol == 'O':
				self.board[row][col] = 2
				return True
			return False
		return False

	def reset_board(self):
		for row in range(3):
			for col in range(3):
				self.board[row][col] = 0

	def game_is_won(self):
		for row in range(3):
			if self.board[row][0] == self.board[row][1] and self.board[row][1] == self.board[row][2] and self.board[row][0] != 0:
				return True

		for col in range(3):
			if self.board[0][col] == self.board[1][col] and self.board[1][col] == self.board[2][col] and self.board[0][col] != 0:
				return True

		if self.board[0][0] == self.board[1][1] and self.board[1][1] == self.board[2][2] and self.board[0][0] != 0:
			return True

		if self.board[2][0] == self.board[1][1] and self.board[1][1] == self.board[0][2] and self.board[2][0] != 0:
			return True

		return False

	def current_player(self):
		number_Xs = self.num_Xs(self.board)
		number_Os = self.num_Os(self.board)
		if number_Xs == number_Os: # If equal numbers of symbols, 'X' is current player
			return 'X'
		return 'O' # Otherwise 'O' is the current player

	def num_Xs(self, board):
		num_X = 0
		for row in range(3):
			for col in range(3):
				if self.board[row][col] == 1:
					num_X+=1
		return num_X

	def num_Os(self, board):
		num_O = 0
		for row in range(3):
			for col in range(3):
				if self.board[row][col] == 2:
					num_O+=1
		return num_O

	def num_open_spaces(self):
		blank_cells = 0
		for row in range(3):
			for col in range(3):
				if self.board[row][col] == 0:
					blank_cells+=1
		return blank_cells

	def get_possible_moves(self):
		# Returns all the possible moves current player can
		# make on this board
		# Returns: A list of tuples in the form (row, col)
		possible_moves = []
		for row in range(3):
			for col in range(3):
				if self.board[row][col] == 0:
					possible_moves.append((row,col))
		return possible_moves

	def make_move(self, current_player, row, col):
		board_copy = [element[:] for element in self.board]
		if current_player == 'X':
			board_copy[row][col] = 1
		else:
			board_copy[row][col] = 2
		copy_board = TicTacToeBoard()
		copy_board.board = board_copy
		return copy_board

	def calculate_board_score(self):
		# Calculates the score of the current board, there are 3 main scenarios:
		# (i) If 'X' wins => returns 10
		# (ii) If 'O' wins => returns -10
		# (iii) No one wins => returns 0
		for row in range(3):
			if self.board[row][0] == self.board[row][1] and self.board[row][1] == self.board[row][2] and self.board[row][0] != 0:
				if self.board[row][0] == 1:
					return 10
				elif self.board[row][0] == 2:
					return -10

		for col in range(3):
			if self.board[0][col] == self.board[1][col] and self.board[1][col] == self.board[2][col] and self.board[0][col] != 0:
				if self.board[0][col] == 1:
					return 10
				elif self.board[0][col] == 2:
					return -10

		if self.board[0][0] == self.board[1][1] and self.board[1][1] == self.board[2][2] and self.board[0][0] != 0:
			if self.board[0][0] == 1:
				return 10
			elif self.board[0][0] == 2:
				return -10

		if self.board[2][0] == self.board[1][1] and self.board[1][1] == self.board[0][2] and self.board[2][0] != 0:
			if self.board[2][0] == 1:
				return 10
			elif self.board[2][0] == 2:
				return -10

		return 0

		




