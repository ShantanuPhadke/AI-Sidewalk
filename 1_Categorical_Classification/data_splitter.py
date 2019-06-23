from sklearn.model_selection import train_test_split
import numpy as np 

class DataSplitter():
	def __init__(self, test_split):
		self.test_split = test_split

	# Inputs:
	#   infilename: String, name of file to read in data from
	#   out_train: String, name of file we will write our training features to
	#   out_train_labels: String, name of file we will write our training labels to
	#   out_test:  String, name of file we will write our test features to
	#   out_test_labels: String, name of file we will write our test labels to
	# Output: None
	# Functionality: Split data into train and test datasets and write splits to the
	# proper set of files.
	def split_data(self, infilename='infile.csv', out_train='out_train.csv', out_train_labels='out_train_labels.csv', out_test='out_test.csv', out_test_labels='out_test_labels.csv'):
		file = open(infilename, 'r')
		X = []
		y = []
		for line in file:
			values = line.split(',')
			num_values = []

			for index in range(len(values)):
				if index > 0:
					num_values.append(float(values[index]))
				else:
					y.append([int(values[index])])
			X.append(num_values)

		X = np.array(X)
		y = np.array(y)

		X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=self.test_split)
		np.savetxt(out_train, X_train, delimiter=",")
		np.savetxt(out_train_labels, y_train, delimiter=",")
		np.savetxt(out_test, X_test, delimiter=",")
		np.savetxt(out_test_labels, y_test, delimiter=",")
		
data_spliter1 = DataSplitter(0.2)
data_spliter1.split_data(infilename='wine.data', out_train='train.csv', out_train_labels='train_labels.csv',out_test='test.csv', out_test_labels='test_labels.csv')
