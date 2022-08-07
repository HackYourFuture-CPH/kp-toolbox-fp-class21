/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tools')
    .insert([
      {
        id: 1,
        name: '1-2-4-ALL',
        time_frame_min: 5,
        time_frame_max: 30,
        group_size_min: 2,
        group_size_max: 100,
        facilitation_level: 'Beginner',
        materials: 'A4 paper & pens',
        pitch:
          'Rapidly generate ideas and tap into the collective knowledge with this simple tool.',
        description:
          'You can immediately include everyone regardless of how large the group is. You can generate better ideas and more of them faster than ever before. You can tap the know-how and imagination that is distributed widely in places not known in advance. Open, generative conversation unfolds. Ideas and solutions are sifted in rapid fashion. Most importantly, participants own the ideas, so follow-up and implementation is simplified. Start alone, then in pairs, then foursomes, and finally as a whole group',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Setup a space that gives all participants the possibility to work face-to-face.',
                'Invite the participants to engage in individual and silent self-reflection on a shared challenge, framed as a question (e.g., What opportunities do YOU see for making progress on this challenge? How would you handle this situation? What ideas or actions do you recommend?). 1 min.',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Invite participants to find another person in the group, and in pairs generate ideas, building on ideas from self-reflection. 2 min.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Invite participants to find another pair, and in foursome share and develop ideas from the pairs (notice similarities and differences). 4 min.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                "Ask the whole group 'What is one idea that stood out in your conversation?' Each group shares one important idea with all (repeat cycle as needed). 5 min.",
              ],
            },
          ],
        },
        source: 'Liberating Structures',
        picture: '/assets/images/tool-pic-124-all.png',
      },
      {
        id: 2,
        name: 'STINKY FISH',
        time_frame_min: 5,
        time_frame_max: 30,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Medium',
        materials: 'Printed A4 papers with a large outline of a fish',
        pitch:
          'Share fears, anxieties and uncertainties related to the program theme to create openness within a group.',
        description:
          "A short activity to run early in a program focused on sharing fears, anxieties and uncertainties related to the program theme. The purpose is to create openness within a group. The stinky fish is a metaphor for 'that thing that you carry around but don't like to talk about; but the longer you hide it, the stinkier it gets.' By putting stinky fish (fears and anxieties) on the table, participants begin to relate to each other, become more comfortable sharing, and identify a clear area for development and learning.",
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Introduce the purpose of the exercise in your own words. Explain that the purpose is to explore and share our individual worries/concerns about the future as a way to start a conversation and begin to confront or overcome them.',
                "Hand out one Stinky Fish template to each participant. Explain the metaphor of the Stinky Fish: 'The Stinky Fish is that thing that you carry around but don't like to talk about; but the longer you hide it, the stinkier it gets. It's a metaphor for fear or anxiety; something that will only get worse if you don't acknowledge and deal with it.'",
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Give participants around 5 minutes to write down their personal stinky fish for the context of the program.',
                'For example, if the context is a Digital Master Class, the stinky fish could be about fears and anxieties related to digital change. If the context is an organizational change workshop, the stinky fish would be about fears and anxieties related to change in our organization. They should write only a few words or a phrase inside the body of the fish.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Once all participants have written their stinky fish, invite the group back, sit in a circle, and have each participant share their fish with the rest of the group.',
                'Ask participants to share one at a time, for 30 to 60 seconds each. Continue until all participants have shared. Facilitator notes.',
                'Optionally, put all the stinky fish up on the wall as a kind of gallery. It can be useful to come back to them later in a program to refer back to some of the fears and anxieties that were brought up at the beginning.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Wrap up the exercise by thanking participants and reminding them that in the rapidly-changing world, uncertainty and worry about the future are totally normal.',
                "Explain that 'putting fish on the table' is an important first step to confronting and dealing with worries and fears. If relevant, explain that elements of the program to follow will offer the chance to further explore some of these stinky fish.",
              ],
            },
          ],
        },
        source: 'Hyper Island',
        picture: '/assets/images/tool-pic-stinky-fish.png',
      },
      {
        id: 3,
        name: 'PURPOSE TO PRACTICE',
        time_frame_min: 60,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 100,
        facilitation_level: 'Expert',
        materials: 'Flipchart Paper, Markers, Post-its',
        pitch:
          'Design the Five Essential Elements for a Resilient and Enduring Initiative.',
        description:
          'By using P2P at the start of an initiative, the stakeholders can shape together all the elements that will determine the success of their initiative. The group begins by generating a shared purpose (i.e., why the work is important to each participant and the larger community). All additional elements—principles, participants, structure, and practices—are designed to help achieve the purpose. By shaping these five elements together, participants clarify how they can organize themselves to adapt creatively and scale up for success. For big initiatives, P2P makes it possible to include a large number of stakeholders in shaping their future initiative.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Introduce the idea of P2P, the five elements, and related questions, and hand out blank worksheets. 5 min. ',
              ],
            },
            {
              header: 'Step 2',
              text: [
                "Start with the first element, Purpose. Ask the question: 'Why is the work important to you and the larger community?'",
                'Use 1-2-4 to generate individual ideas and stories for Purpose. 10 min.',
                'In groups of four, compare, sift, and amplify the top ideas. 10 min.As a whole group, integrate themes and finalize ideas for Purpose. 10 min.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Move to the remaining P2P elements, in turn, repeating the three steps of 1-2-4-All. Be prepared to go back and revise previous elements as needed (expect some messy nonlinearity). Use the following questions to guide the development of the next four elements:',
                "Principles: 'What rules must we absolutely obey to succeed in achieving our purpose?'",
                "Participants: 'Who can contribute to achieving our purpose and must be included?'",
                "Structure: 'How must we organize (both macro- and microstructures) and distribute control to achieve our purpose?'",
                "Practices: 'What are we going to do? What will we offer to our users/clients and how will we do it?'",
                "After each element, ask, 'Has this element shed new light that suggests revisions to previous elements?' 5 min.",
              ],
            },
            {
              header: 'Step 4',
              text: [
                'When all elements have been completed, ask participants to step back and take a close look at their draft of the five elements together. Ask them to use What, So What, Now What? in small groups to make sense of all of the possible next steps and prioritize them as a whole group. 15 min.',
              ],
            },
            {
              header: 'Step 5',
              text: [
                'After the initiative has been launched, invite the participants to revisit their P2P design periodically and adapt elements based on their experience.',
              ],
            },
          ],
        },
        source: 'Liberating Structures',
        picture: '/assets/images/tool-pic-purpose-to-practice.png',
      },
      {
        id: 4,
        name: 'COUNT UP',
        time_frame_min: 5,
        time_frame_max: 30,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Beginner',
        materials: 'none',
        pitch: 'Generate calm and focused collective energy in a group.',
        description:
          'In this short exercise, a group must count up to a certain number, taking turns in a random order, with no two people speaking at the same time. The task is simple, however, it takes focus, calm and awareness to succeed. The exercise is effective to generate calm and focused collective energy in a group.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'The group stands in a close huddled circle with their eyes closed. A variation is to have the group disperse around a room, standing, sitting or lying down.',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Explain the rules: The goal is to count to 20 (or the number of members in the group.) Only one person may say one number at a time. If two people speak at the same time, even for the slightest moment, the group must start over at number 1. The group has succeeded when they have counted up to the set number.',
              ],
            },
          ],
        },
        source: 'unknown',
        picture: '/assets/images/tool-pic-count-up.png',
      },
      {
        id: 5,
        name: 'WORLD CAFÉ',
        time_frame_min: 60,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Beginner',
        materials: 'Flipchart Paper, Markers',
        pitch:
          'Share fears, anxieties and uncertainties related to the program theme to create openness within a group.',
        description:
          'World Café is a simple yet powerful method, originated by Juanita Brown, for enabling meaningful conversations driven completely by participants and the topics that are relevant and important to them. Facilitators create a cafe-style space and provide simple guidelines. Participants then self-organize and explore a set of relevant topics or questions for conversation.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                "Create a casual, welcoming environment, most often modelled after a café, (i.e., small round tables covered with paper, colored markers, plants or flowers, and optional item to use as a 'talking stick'. There should be four to six chairs per table. Welcome and introduction: begin with a welcome and an introduction to the World Café process, setting the context, sharing guidelines, and putting participants at ease. See the World Café website for further background and participant guidelines.",
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Questions: each round is guided by a question or questions designed for the specific context and desired purpose of the session. There can be a single question that all tables discuss or different questions at each table. The same questions can be used for more than one round, or they can be built upon each other to focus the conversation or guide its direction.',
                'The questions should be compelling, open, energizing and relevant to the context. Questions are usually set by participants themselves and created before the session begins.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Small group rounds: The process begins with the first of three or more twenty-minute rounds of conversation for the small groups at each table. During the rounds participants explore the question in focus in an open way. A designated “table host” should support the flow of conversation without leading. At least one person should have the responsibility to “record” the conversation on large paper, using words and drawings.',
                "At the end of each twenty-minute round, participants move to new tables. One person stays at each table as a 'table host' for the next round, welcoming the next group and briefly filling them in on what happened in the previous round.",
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Harvest: After the small groups (and/or in between rounds, as desired) individuals are invited to share insights or other results from their conversations with the rest of the larger group.',
              ],
            },
          ],
        },
        source: 'World Café Community Foundation',
        picture: '/assets/images/tool-pic-world-cafe.png',
      },
      {
        id: 6,
        name: 'OPEN SPACE TECHNOLOGY',
        time_frame_min: 60,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 100,
        facilitation_level: 'Medium',
        materials: 'Flipchart Paper, Markers, post-it, A4 papers',
        pitch: 'Liberate Inherent Action and Leadership in Groups of Any Size.',
        description:
          'When people must tackle a common complex challenge, you can release their inherent creativity and leadership as well as their capacity to self-organize. Open Space makes it possible to include everybody in constructing agendas and addressing issues that are important to them. Having co-created the agenda and free to follow their passion, people will take responsibility very quickly for solving problems and moving into action. Letting go of central control (i.e., the agenda and assignments) and putting it in the hands of all the participants generates commitment, action, innovation, and follow-through. You can use Open Space with groups as large as a couple of thousand people!',
        instructions: {
          description: [
            'Chairs in concentric circles for 10–1,000 people in a large room or open space',
            'Large blank agenda posted on easels and flip charts, long tapestry paper, or whiteboard Agenda to include slots for enough concurrent sessions to accommodate what is likely to emerge given the challenge and the number of participants. (One rule of thumb is that 3 out of 10 participants will post a session, e.g., there will be 15 sessions posted from 50 participants.)',
            "The 'Law of Two Feet' governs the participation of all attendees in the various sessions. It says: 'Go and attend whichever session you want, but if you find yourself in a session where you are not learning or contributing, use your two feet!'",
            'Start together in one large circle (or as many concentric circles as needed).',
            'Continue with groups of various sizes self-organized around agenda topics.',
          ],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Leader and/or facilitator introduces the concept and mechanics of Open Space, including the Law of Two Feet and its Four Principles (5 min)',
              ],
            },
            {
              header: 'Step 2',
              text: [
                "'Marketplace' opens: participants propose topics plus a time and place for the group to meet. (15 min)",
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Conveners facilitate sessions; groups develop recommendations of actions plans. Notes are takend and shared in the room, published or posted (2 rounds of 30 mins OR 1 round of 60 minutes)',
              ],
            },
            {
              header: 'Step 4',
              text: ['Debrief, proceeding distributed, and closing.'],
            },
          ],
        },
        source: 'Harrison Owen',
        picture: '/assets/images/tool-pic-open-space-technology.png',
      },
      {
        id: 7,
        name: 'ECOCYCLE PLANNING',
        time_frame_min: 60,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 100,
        facilitation_level: 'Medium',
        materials:
          'Printed A3 Ecocycle map for each participant, post-its, markers',
        pitch:
          'Analyze the Full Portfolio of Activities and Relationships to Identify Obstacles and Opportunities for Progress.',
        description:
          "You can eliminate or mitigate common bottlenecks that stifle performance by sifting your group's portfolio of activities, identifying which elements are starving for resources and which ones are rigid and hampering progress. The Ecocycle makes it possible to sift, prioritize, and plan actions with everyone involved in the activities at the same time, as opposed to the conventional way of doing it behind closed doors with a small group of people. Additionally, the Ecocycle helps everyone see the forest AND the trees—they see where their activities fit in the larger context with others. Ecocycle Planning invites leaders to focus also on creative destruction and renewal in addition to typical themes regarding growth or efficiency. The Ecocycle makes it possible to spur agility, resilience, and sustained performance by including all four phases of development in the planning process.",
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Introduce the idea of the Ecocycle, to view, organize, and prioritize current activities using four developmental phases: birth, maturity, creative destruction, and renewal and to formulate action steps linked to each phase: actions that accelerate growth during the birth phase, actions that extend life or increase efficiency during the maturity phase, actions that prune dead wood or compost rigid practices during the creative destruction phase, actions that connect creative people or prepare the ground for birth during the renewal phase. The leadership stance required for each phase can be characterized as entrepreneur, manager, heretic, and networker.',
                "Hand out a blank map to each participant. 5 min. Ask participants to generate their individual activity lists: 'For your working group (e.g., department, function, or whole company), make a list of all the activities (projects, initiatives) that occupy your time.' 5 min.",
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Ask them to work in pairs to decide the placement of every activity in the Ecocycle. 10 min.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Invite them to form groups of four and finalize the placement of activities on the Ecocycle map. 15 min.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Ask each group to put its activities on Post-it notes and create a whole-room map by inviting the groups one by one to place their Post-its on the larger map. 15 min.',
              ],
            },
            {
              header: 'Step 5',
              text: [
                'Ask each group to step back and digest the pattern of placements. Ask them to focus on all the activities on which there is consensus about their placement. Ask, “What activities do we need to creatively destroy or stop to move forward? What activities do we need to expand or start to move forward?” 15 min.',
              ],
            },
            {
              header: 'Step 6',
              text: [
                'In small groups, for each activity that needs to be stopped (activities that are in the Rigidity Trap), create a first-action step. 10 min. or more depending on the number of activities and groups.',
              ],
            },
            {
              header: 'Step 7',
              text: [
                'In small groups, for each activity that needs to start or get more resources (activities in the Poverty trap), create a first-action step. 10 min. or more as above.',
              ],
            },
            {
              header: 'Step 8',
              text: [
                'Ask all the groups to focus on all the activities for which there is no consensus. Do a quick round of conversation to make sense of the differences in placement. When possible, create first-action steps to handle each one. 10 min.',
              ],
            },
          ],
        },
        source: 'Liberating Struuctures',
        picture: '/assets/images/tool-pic-ecocycle-planning.png',
      },
      {
        id: 8,
        name: 'LIGHTNING DECISION JAM (LDJ)',
        time_frame_min: 30,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 20,
        facilitation_level: 'Medium',
        materials:
          'Rectangular post-its. Square post-its (2 different colours). Voting dots, 2 different colours. Markers. Timer.',
        pitch:
          'Take decisions while staying creative replacing all open, unstructured discussion with a clear process.',
        description:
          "The problem with anything that requires creative thinking is that it's easy to get lost—lose focus and fall into the trap of having useless, open-ended, unstructured discussions. Here's the most effective solution I've found: Replace all open, unstructured discussion with a clear process. What to use this exercise for: Anything which requires a group of people to make decisions, solve problems or discuss challenges",
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Choose a moderator.',
                'You absolutely need to select someone on the team to take the role of the moderator. They can join in on the process but must focus on making sure no discussion breaks out and has to keep time.',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Start with Problems - 7 mins',
                "The first step is simple: Everybody in the team sits at a table and without discussion they spend 7 minutes writing all the challenges, annoyances, mistakes or concerns that happened during the week. These can really be anything from “I don't feel like we're making progress” to “I feel like project X is getting more attention than my project”. Really anything that is bugging us. Once the 7 minutes are up, each person will have a pile of problem post-its in front of them.",
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Present Problems - 4 mins per person.',
                'The moderator now selects one person at a time to stand up at a wall/whiteboard to very quickly explain each problem as they stick them to the surface. Nobody else in the team is allowed to speak here. The moderator should give no more than 4 minutes per person.',
                'Once everyone has spoken and added their problems (we even include personal/health/mood) then everyone in the group has shared their challenges without going on 100 tangents.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Select Problems to Solve - 6 mins.',
                'The moderator gives each member 2 voting dots — Everybody must now vote on the challenges they consider to be the most pertinent to solve, without discussion.',
                'You can vote on your own posits here and you can put both your votes on one challenge if you feel strong enough about it. Once the 6 minutes is up, the moderator quickly takes the voted problems and arranges them in order of priority. What about the rest of the problems that were not voted on? Do they get lost? Well, more on that later.',
              ],
            },
            {
              header: 'Step 5',
              text: [
                "Reframe Problems as Standardised Challenges — 6 mins a.k.a reformat problems to standardised How Might We's Now, only focussing on the voted and prioritised problems — the moderator is going to rewrite each one as a standardised challenge, this will help us create an array of solutions and be a little bit more broad at the start. || Let's look at an example: The top voted post-it here says “I have no idea what's happening on “project x”. Because many people have voted on it, we can see it's clearly an issue many people are having. Rephrasing the post-it in a “How Might We” format allows us to make it solvable and standardise the way the challenges are written.",
                'The moderator should quickly rewrite all the problems as quickly as possible, making sure they are still prioritised before moving on.',
              ],
            },
            {
              header: 'Step 6',
              text: [
                'Produce Solutions - 7 mins.',
                "Now the top voted HMW problem will be used to produce solutions. If there are two top voted problems, or three just start with the one on the left first. Don't worry about it and do not discuss!",
                "Now each team member is given in 7 minutes to write as many possible ways to tackle the How Might We challenge without any discussion. Removing discussion here also insures a variety of solutions. It's important for the moderator to tell the team members here that we're aiming for Quantity over Quality– Later we can curate.",
                "Solutions don't have to be written in any particular way– but they must be understandable to people reading. There is no individual presenting of solutions as this creates a bias towards the best presenters.",
                'Once the 7 minutes is up— now everybody sticks their ideas on the surface (wall, whiteboard, whatever) as fast as possible, no need to be neat— just stick them anywhere – this should only require one-minute.',
              ],
            },
            {
              header: 'Step 7',
              text: [
                'Vote on Solutions - 10 mins.',
                "Remember this? We've done it before right? The moderator now gives each team member is stripped of six d0ts to vote on the solutions they think would best solve the HMW. Because the members will need to read each post-it, a little more time is given for this voting process: 10 minutes.",
              ],
            },
            {
              header: 'Step 8',
              text: [
                'Prioritise Solutions - 30 Seconds.',
                'Deja vu! Just like we did with the problems, the team now has 30 seconds to make a prioritised list of solutions — Ignore anything with the less than two votes.',
              ],
            },
            {
              header: 'Step 9',
              text: [
                'Decide what to execute on - 10 mins.',
                "It is clear that some solutions are more popular than others to test out, but it's important to know how much effort is required to execute the solutions – so here we use a simple effort/impact scale to determine which solutions to try ASAP, and which should be added to a to-do list, or however you store your backlog.",
                'The moderator needs to be very proactive at this step, as it is the only one that has a tendency to open up discussion. The Moderator will now take each solution one by one and add them to the effort/impact scale. Effort, in this case is how much effort we as a team think it will take to implement and impact is the degree to which we think it would solve our problem.',
                "So here's what the moderator needs to do: Take the top voted solution, hovers it over the center of the E/I scale and simply asks 'higher or lower' — usually some small discussions break out here, so the moderator has to be diligent in finding a consensus and stopping any conversations extending past 20 seconds. Once the effort has been determined, the moderator uses the same drill for impact: 'Higher or Lower.'",
                'Now you have a clear overview of what which high-impact solutions could be executed on and tested very quickly (In the green sweet-spot on the top left), and which high-impact solutions will take more effort (top right). The moderator should now quickly mark all post-its in the sweet spot with a contrasting dot so we can identify them later.',
              ],
            },
            {
              header: 'Step 10',
              text: [
                'Turn Solutions into Actionable Tasks - 5 mins.',
                "The moderator now takes the 'Sweet Spot' solutions off the E/I scale and asks the person who wrote the solution to give actionable steps toward testing the solution. When I say actionable, I really mean something that could be executed on in the timeframe of 1–2 weeks. My rule of thumb is a 1-week experiment, but of course this will depend on what the solution entails.",
                "Once all these solutions are written up, your team now has actionable tasks that can be committed to (depending on how your team deals with task management, that's for another day). As for the solutions that didn't make it in to the “Sweet Spot”? We actually turn all the high impact solutions into actionable post-its and add them to our backlog so they don't get forgotten. What you might see happening is that the sweet spot actions actually end up solving problems in a way that the higher effort solutions become obsolete and you can later rip them apart!",
              ],
            },
          ],
        },
        source: 'AJ&Smart Berlin',
        picture: '/assets/images/tool-pic-lightning-decision-jam.png',
      },
      {
        id: 9,
        name: 'PARKING LOT',
        time_frame_min: 5,
        time_frame_max: 120,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Beginner',
        materials: 'Flipchart Paper, Colored Markers, Masking/scotch tape',
        pitch:
          'Ensure that important questions do not get lost and that the group can stay focused on the most relevant things.',
        description:
          'This is a classic business tool used to keep meetings and workshops focused on track. During discussions, questions will often emerge that are important but not fully relevant to the focus at the moment. These questions or issues are “parked” on a flipchart, to be addressed and answered later. This practice helps ensure that important questions do not get lost and that the group can stay focused on the most relevant things.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'At the start of a meeting or workshop explain to the group that we are going to use a “parking lot” to help the work more effectively.',
                "Write a large “P” at the top of the flipchart paper and tape it to a prominent wall. Explain that whenever a point is raised or questions are asked that don't directly relate to the subject or session, you will write it on a post-it note, and stick that onto the flipchart paper.",
                'Invite group members also add to the parking lot at any time.',
              ],
            },
            {
              header: 'Step 2',
              text: ['Use it throughout the meeting/workshop.'],
            },
            {
              header: 'Step 3',
              text: [
                'As the meeting/workshop comes to a close, ensure that there is time to address the points and questions on the parking lot, with the whole group.',
                'If there are any questions left unanswered make sure that you or a group member follows them up.',
              ],
            },
          ],
        },
        source: 'unknown/ Hyper Island',
        picture: '/assets/images/tool-pic-parking-lot.png',
      },
      {
        id: 10,
        name: 'APPLE DRAWING IDEATION',
        time_frame_min: 5,
        time_frame_max: 60,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Beginner',
        materials: 'Flipchart Paper, Colored Markers',
        pitch:
          'Demonstrate three key principles useful for creativity and idea generation.',
        description:
          'The purpose of this simple exercise is to demonstrate three key principles useful for creativity and idea generation: quantity is a condition for quality; building on the ideas of others; the ideas we come up with are usually all the same. The format is simple, with small groups standing and drawing apples. At the end of the exercise, the whole group reflects and draws out learnings and reflections.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Split the participants into groups of 4-6. Draw grids of roughly 30 squares on flipchart paper, one for each group (you may want to do this in advance of the session).',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Introduce the exercise to the groups. Explain that it is a simple exercise that will help them define some principles for creativity and idea generation. It will get them in a mindset of divergent thinking. And it will be fun. They will work in silence for 10-15 minutes to draw as many different kinds of apple as they can.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'They should all take pens/markers, ideally with different colours in each group. Give them 10-15 minutes to fill their grid. Starting in the top-left square, the group members take turns drawing apples. No apple can be the same. They should be in complete silence. Relaxing background music may be appropriate.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Stop the exercise when all of the grids and squares are filled, or the time has run out.',
              ],
            },
            {
              header: 'Step 5',
              text: [
                'Give the groups 2-3 minutes to discuss the experience and draw out learnings and insights from the exercise. You could ask reflection questions like: How was it to do this exercise? What can we learn about creativity from this exercise? What are some principles we can draw out from this?',
              ],
            },
            {
              header: 'Step 6',
              text: [
                'Bring the groups together, collating their grids in one place and standing in a horseshoe around them. Ask the same questions as in Step 5 to the whole group and discuss any answers. Be sure to highlight the commonalities between the groups. As participants share, highlight these key insights: quantity is a condition for quality; building on the ideas of others; the ideas we come up with are usually all the same.',
              ],
            },
          ],
        },
        source: 'Henrik Johansson, Thomas Reibke and Sarah Juhl Gregersen',
        picture: '/assets/images/tool-pic-apple-drawing-ideation.png',
      },
      {
        id: 11,
        name: 'LINE OF ALIGNMENT',
        time_frame_min: 5,
        time_frame_max: 30,
        group_size_min: 2,
        group_size_max: 40,
        facilitation_level: 'Beginner',
        materials: 'none',
        pitch:
          'Engage participants while promitng non-verbal communication and teamwork.',
        description:
          'In the short group challenge, participants must organize themselves in a line according to a certain criteria (like height) without speaking. The activity promotes non-verbal communication and teamwork. Simpler versions of the activity can be used in early stages of group development while more complex versions can be used to challenge more established groups.',
        instructions: {
          description: [],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Give the group the task to line-up in order of height (tallest-shortest) without talking.',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Repeat the challenge two or three times with progressively more challenging tasks, such as:',
                'Line up by hair color or eye color (lightest-darkest)',
                'Line up by date of birth (youngest to oldest)',
                'Line up by where you were born (farthest-closest)',
                'A highly challenging alternative is to do any of the above with all participants blindfolded. In this case, the group needs to use physical touch and or clapping to solve the task. This alternative takes much more time and should involve a reflection at the end.',
              ],
            },
          ],
        },
        source: 'unknown',
        picture: '/assets/images/tool-pic-line-of-alignment.png',
      },
      {
        id: 12,
        name: 'TROIKA CONSULTING',
        time_frame_min: 5,
        time_frame_max: 30,
        group_size_min: 2,
        group_size_max: 100,
        facilitation_level: 'Beginner',
        materials: 'none',
        pitch:
          'Get Practical and Imaginative Help from Colleagues Immediately.',
        description:
          "You can help people gain insight on issues they face and unleash local wisdom for addressing them. In quick round-robin 'consultations', individuals ask for help and get advice immediately from two others. Peer-to-peer coaching helps with discovering everyday solutions, revealing patterns, and refining prototypes. This is a simple and effective way to extend coaching support for individuals beyond formal reporting relationships. Troika Consulting is always there for the asking for any individual who wishes to get help from colleagues or friends.",
        instructions: {
          description: [
            "Invite the group to explore the questions 'What is your challenge?' and 'What kind of help do you need?'",
            'People sit in any number of small groups of 3 chairs, knee-to-knee seating preferred. No table!',
            "In each round, one participant is the 'client', the others  'consultants'.",
            'Everyone has an equal opportunity to receive and give coaching.',
          ],
          steps: [
            {
              header: 'Step 1',
              text: [
                'Invite participants to reflect on the consulting question (the challenge and the help needed) they plan to ask when they are the clients. 1 min.',
              ],
            },
            {
              header: 'Step 2',
              text: [
                'Groups have first client share his or her question. 1-2 min.',
              ],
            },
            {
              header: 'Step 3',
              text: [
                'Consultants ask the client clarifying questions. 1-2 min.',
              ],
            },
            {
              header: 'Step 4',
              text: [
                'Client turns around with his or her back facing the consultants.',
                'Together, the consultants generate ideas, suggestions, coaching advice. 4-5 min.',
              ],
            },
            {
              header: 'Step 5',
              text: [
                'Client turns around and shares what was most valuable about the experience. 1-2 min.',
              ],
            },
            {
              header: 'Step 6',
              text: ['Groups switch to next person and repeat steps.'],
            },
          ],
        },
        source: 'Liberating Structures',
        picture: '/assets/images/tool-pic-troika-consulting.png',
      },
    ])
    .onConflict('id')
    .merge();
};
