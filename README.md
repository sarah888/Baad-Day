# Baad-Day
Baad Day brings awareness to the struggles one faces throughout the day and how to handle them. Children often experience stressors at school or home including new feelings they have never experienced before. Baad Day presents the user with situations that can deteriorate one's mental health, such as staying in bed too often, eating unhealthy foods, demotivating affirmations, and substance abuse. Our web app provides them with choices to make in each situation that will either improve or worsen their states. Mental health issues require timely and effective care, and educating the youth early on how to recognize them can greatly prevent hospital backlogs in mental health care.

# Table of Contents  
[Inspiration](#Inspiration)  
[Interface](#Interface)  
[Levels](#Levels)  
[Challenges Encoutered](#Challenges-We-Encountered)  
[What's Next?](#What's-Next-for-Baad-Day)   

# Inspiration
An estimated 1.2 million children and youth in Canada are affected by mental illness—yet, less than 20 per cent will receive appropriate treatment. Rising since the pandemic, the Canadian health system continues to experience a backlog in hospital capacities for children in need of mental health services. This leads to worsening issues, prolonged recovery, and delayed medical screenings. To tackle this problem amongst the youth, Baad Day provides an interactive interface for children to learn more about mental health— and specifically, how to navigate a Baad day. This helps the youth recognize mental health issues in their daily habits and learn how to combat them.

# Interface
![image](https://user-images.githubusercontent.com/43208342/226396239-bf7e732a-b044-4b3c-b40b-770b6b09c03b.png)
![image](https://user-images.githubusercontent.com/43208342/226396567-bcac4d8b-15e8-43f7-8c1d-9718b162ce2d.png)

# Levels
In each level, users are presented with daily situations where they must make choices to set Sheeper up for long-term success.

<b>Level 1:</b> Users  must choose if they will let Sheeper sleep in or not. Letting him sleep in will make Sheeper happy in the moment. However, waking them up now will benefit them in the long term, letting them prepare for their day.
![image](https://user-images.githubusercontent.com/43208342/226397342-bf10ef70-2782-4e4d-9682-d35a148b5847.png)
![image](https://user-images.githubusercontent.com/43208342/226398576-c577c3d7-2dc5-439e-8611-b64ac128f69a.png)

</b>Level 2:</b> Sheeper is looking to make a healthy lunch to get him through his day. Users can input ingredients for Sheeper's lunch. From the FoodData Central API, users can view the nutritional contents of their selections. 
![image](https://user-images.githubusercontent.com/43208342/226399540-dddecca5-6f67-46c8-9bfd-3bbc11adf86b.png)
![image](https://user-images.githubusercontent.com/43208342/226399628-fc6053ee-99e9-44b5-80da-c973d2fa0e1c.png)
![image](https://user-images.githubusercontent.com/43208342/226399691-3001173d-d580-49bb-b255-70fd1cb03624.png)

<b>Level 3:</b> Sheeper did not get the student council position and is having trouble coping. After evaluating their symptoms, users can opt to send Sheeper to the hospital or calm them with words of affirmation. Sending Sheeper to the hospital will result in him not getting treated due the overcapacity healthcare system. By providing words of affirmation, user's responses can be evaluated by the Cohere Classification API so see if it can be improved upon.
![image](https://user-images.githubusercontent.com/43208342/226400650-fb500dcf-c7be-4945-a90a-6dc6e4d0a2bc.png)
![image](https://user-images.githubusercontent.com/43208342/226400721-457b7b97-63d5-4910-8855-7732581112e4.png)
![image](https://user-images.githubusercontent.com/43208342/226400791-4aafb2d9-82d9-48cf-a996-ca9c28d14d31.png)

<b>Level 4:<b> After a long day, Sheeper is having trouble going to bed. Knowing they have already taken Nyquil, users are tasked with deciding what Sheeper should do to get a good nights rest.
![image](https://user-images.githubusercontent.com/43208342/226401760-10090cf0-5629-4cc5-9cb3-5c25268b129d.png)
![image](https://user-images.githubusercontent.com/43208342/226401821-893c2ee2-3b0a-47e6-8291-f672cd45bc55.png)

<b>End Page:<b> Based on the user's decisions in the game, they are given a synposis of the next day!
![image](https://user-images.githubusercontent.com/43208342/226401906-3aa7e722-b4f6-4ee2-9449-d0104cd109fd.png)

# Challenges We Encountered
We attempted to implement Cohere Classification API, which takes multiple test cases and classifies them into categories for positive, negative, and neutral affirmations in scenario 3. Our web app could then classify the user input into the categories, and using the second Cohere Generate API, it would produce a more motivating affirmation as a suggestion based on the user input. Due to time constraints, we couldn’t fully implement the API to produce our desired return. We hope to practice using this API for more efficient purposes in the future.

# What's Next for Baad Day
Moving forward, Baad Day wants to implement the Co:here and FoodData Central API to create more impactful systems within our web app. As well, we hope to implement a diverse range of scenarios that one encounters, from frequent ones to obscure situations. This helps to build awareness and allows the youth to recognize these moments and learn how to approach them for the future.

