import React from 'react';
import { ToolDetailsPage } from './ToolDetailsPage.component';

export default {
  component: ToolDetailsPage.component,
  title: 'ToolDetailsPage',
};

const Template = (args) => <ToolDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  tool: {
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
            'Ask participants to share one at a time, for 30 to 60 seconds each. Continue until all participants have shared.',
            'Facilitator notes.',
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
    categories: ['Team', 'Innovation'],
  },
};
