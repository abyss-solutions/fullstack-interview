# Pair Programming Challenge

The Pair programming challenge was designed to simulate a scenario where you work together with other software engineers in order to tackle a problem from design through to implementation of a solution.

The challenge was designed to take much longer than the time allocated so there is no expectation of completion of the task, rather you should aim to add as much value to the solution as possible during the time allocated.

You will be evaluated on the quality of your code, your communication and your solution design.

## Time Outline

| Task             | Duration   |
| ---------------- | ---------- |
| Planning         | 5 minutes  |
| Coding Challenge | 50 minutes |
| Retrospective    | 5 minutes  |

## The Challenge

You are to design and implement software that allows two players to join a game of connect 4 through an online portal and play a game against each other.

If you are unfamiliar with the game you can watch [this short 20 second video](https://www.youtube.com/watch?v=ylZBRUJi3UQ) which explains the rules.

The challenge will be broken out into four stages.

### Stage 1: Planning

After having read through the challenge, you will be given 5 minutes to plan out what features you think are necessary and design a basic outline to the solution.

### Stage 2: Rendering the board

You will send the current board layout from the server to the client and render the layout on the web app.

* board - 2d array each cell has value 0,1,2 where 0 is unfilled and 1=player1 2=player2
* server to have endpoint for board request which returns the board data
* use short polling from client to request board via http (websockets would be a better realtime solution)
* rendering board in client to be simple grid of 0,1 or 2



### Stage 3: Continue working on the solution

Once you have completed stage 1, you will have the opportunity to use the remaining time to implement as much of the solution as possible to allow two people to complete a game online.

### Stage 4: Retrospective

During the last 5 minutes you will have the opportunity to reflect on how you addressed the challenge.

Discuss which choices you felt were effective and what things you would do differently if you had the opportunity to take the challenge again.
