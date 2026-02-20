---
layout: article.njk
title: Introduction to Machine Learning with Python for Beginners
date: 2026-01-03
category: AI & ML
image: /img/logos/logo-belajarpython-square.png
permalink: /en/2026/01/introduction-machine-learning-python/
---

Machine Learning (ML) is a branch of artificial intelligence (AI) that allows computers to learn from data without being explicitly programmed. If traditional programming is giving step-by-step instructions, Machine Learning is giving data to a computer and letting it find patterns itself.

Python is currently the "de facto" programming language for Machine Learning and Data Science because of its readable syntax and very rich ecosystem of libraries.

## Types of Machine Learning

Before getting into the code, it's important to understand the three main categories in ML:

1.  **Supervised Learning**: The computer is trained with data that already has labels (answers). Example: Detecting spam email (spam/not spam).
2.  **Unsupervised Learning**: The computer looks for patterns in unlabeled data. Example: Grouping customers based on shopping behavior (clustering).
3.  **Reinforcement Learning**: The computer learns through *trial and error* to achieve a specific goal. Example: AI learning to play chess.

## Environment Preparation

To follow this tutorial, you need to install the `scikit-learn` library, which is the most popular ML library for beginners.

```bash
pip install scikit-learn
```

## Case Study: Distinguishing Apples and Oranges

We will create a simple program using the **Decision Tree** algorithm to distinguish Apples and Oranges based on their physical characteristics.

Suppose we have the following observational data:

| Weight (gram) | Texture | Fruit |
| :--- | :--- | :--- |
| 140 | Rough | Orange |
| 130 | Rough | Orange |
| 150 | Smooth | Apple |
| 170 | Smooth | Apple |

In computers, we will change the text data into numbers so it can be processed:
*   Texture: 0 = Smooth, 1 = Rough
*   Fruit: 0 = Apple, 1 = Orange

### Python Code

Create a file `ml_fruit.py` and write the following code:

```python
from sklearn import tree

# 1. Prepare Data (Features)
# Format: [weight, texture]
# Texture: 0 = Smooth, 1 = Rough
features = [
    [140, 1], 
    [130, 1], 
    [150, 0], 
    [170, 0]
]

# 2. Prepare Labels (Target)
# 0 = Apple, 1 = Orange
labels = [1, 1, 0, 0]

# 3. Create Model (Classifier)
# We use Decision Tree
clf = tree.DecisionTreeClassifier()

# 4. Train Model
# Model learns patterns from features and labels
clf = clf.fit(features, labels)

# 5. Make Prediction
# We have a new fruit: Weight 160g, Texture Smooth (0)
new_fruit = [[160, 0]]
prediction = clf.predict(new_fruit)

# Show result
if prediction[0] == 0:
    print("Prediction Result: Apple")
else:
    print("Prediction Result: Orange")
```

### Code Explanation

*   **Features**: These are attributes or characteristics of the data. Here our features are weight and texture.
*   **Labels**: These are the correct answers or classifications.
*   **fit()**: This is the "learning" process. The model looks for mathematical relationships between weight/texture and fruit type.
*   **predict()**: After learning, the model is tested with new data that has never been seen before.

## What's Next?

Congratulations! You just created your first Machine Learning model. The ML world is very vast, here is a suggested learning roadmap:

1.  **Data Manipulation**: Learn **Pandas** library for processing tabular data (CSV, Excel).
2.  **Data Visualization**: Learn **Matplotlib** or **Seaborn** to create graphs from data.
3.  **Other Algorithms**: Learn other algorithms in Scikit-Learn like *Linear Regression*, *K-Nearest Neighbors (KNN)*, and *Support Vector Machine (SVM)*.
4.  **Deep Learning**: If you are already proficient, continue to **TensorFlow** or **PyTorch** to create Neural Networks.
