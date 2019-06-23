from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

class Classifier():
	def __init__(self, model):
		self.model = model

	def train(self, X_train, y_train):
		self.model.fit(X_train, y_train)

	def predict(self, X_test, y_test):
		y_pred = self.model.predict(X_test)
		self.accuracy = accuracy_score(y_test, y_pred)
		return (self.accuracy, y_pred)
