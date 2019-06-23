import pandas as pd
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
from classifier import Classifier

import warnings
warnings.filterwarnings("ignore")

parameter_candidates = [
	{'C': [0.1,1,10,100,1000], 'kernel': ['linear']},
	{'C': [0.1,1,10,100,1000], 'gamma': [0.001, 0.0001], 'kernel': ['rbf', 'sigmoid']},
	{'C': [0.1,1,10,100,1000], 'gamma': [0.001, 0.0001], 'degree': [3,4,5], 'kernel': ['poly']}
]

svm_classifier = Classifier(GridSearchCV(estimator=SVC(), param_grid=parameter_candidates, n_jobs=1))
X_train = pd.read_csv('train.csv', header=None)
y_train = pd.read_csv('train_labels.csv', header=None)
X_test = pd.read_csv('test.csv', header=None)
y_test = pd.read_csv('test_labels.csv', header=None)

svm_classifier.train(X_train, y_train.values.ravel())
accuracy, y_pred = svm_classifier.predict(X_test,y_test.values.ravel())
print("Model Accuracy =", accuracy)
