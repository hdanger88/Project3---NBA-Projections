# Project3---NBA-Projections

Analyzed 718 former college players who've played or will play in the NBA.
Trained the college statistical data of these historic players to create a prediction, which we compared to their actual stats as NBA rookies.
We utilized 29 unique features related to a player's individual statistical production and implemented recursive feature elimination to find the best fits.
We ran 3 different regression models and compared those scores to determine the best performing model for our prediction.
We chose Random Forrest as it held the highest accuracies within 50% of the predicted values. Random Forrest also performed marginally higher than the other models in cross validation testing.
Random Forrest also outperformed Linear Regression and XBGRegressor in its ability to predict high level performers, such as players that scored over 15 points in their rookie season.
Overall there are still improvements to be made in this testing model. Overfitting was initially and issue and we had concerns with our models producing low accuracy results. Eventually, we found that overfitting our training models allowed us to more accurately predict the stats high performing players out of college.

