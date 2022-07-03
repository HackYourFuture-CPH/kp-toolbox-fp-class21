/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tools').del();
  await knex('tools').insert([
    {
      id: 1,
      category_id: '2',
      name: 'Guessing',
      time_frame: '5 min',
      group_size: '4 person',
      facilitation_level: 'hard',
      material: 'pen and papier',
      description: 'guess who is the criminal',
      steps: 'you should find the criminal',
      tool_origin: 'sherlock holmes ',
      price: 69,
      picture: 'picture',
      status: 'active',
      created_at: '2019/10/07 14:34',
    },
    {
      id: 2,
      category_id: '1',
      name: 'Calculate',
      time_frame: '10 min',
      group_size: '8 person',
      facilitation_level: 'medium',
      material: 'your brain',
      description: 'calculate the number quickly',
      steps: 'you should calculate numbers quickly without calculator',
      tool_origin: 'mind math',
      price: 49,
      picture: 'picture',
      status: 'active',
      created_at: '2020/11/07 14:34',
    },
    {
      id: 3,
      category_id: '4',
      name: 'Pong',
      time_frame: '15 min',
      group_size: '2 person',
      facilitation_level: 'costum',
      material: 'laptop',
      description: 'Take time out for some virtual ping pong',
      steps: 'play ping pong with your friend',
      tool_origin: 'ping pong',
      price: 19,
      picture: 'picture',
      status: 'not_active',
      created_at: '2021/07/19 14:34',
    },
    {
      id: 4,
      category_id: '5',
      name: 'Feedback: Start, Stop, Continue',
      time_frame: '60-120 min',
      group_size: '2-40 person',
      facilitation_level: 'Experienced',
      material:
        "Sticky notes & Pens/Markers, if you're working online use a chat function or virtual sticky notes.",
      description:
        'This is an exercise for groups or teams who are mature, have worked together for some time, and are familiar with giving and receiving feedback.',
      steps:
        'Work in a small team or organize a larger group into groups of around 4 to 6. If online: use breakout rooms.',
      tool_origin: 'leadership ',
      price: 59,
      picture: 'picture',
      status: 'not_active',
      created_at: '2022/05/10 14:34',
    },
    {
      id: 5,
      category_id: '9',
      name: "What's in the Bag?",
      time_frame: '5-30 min',
      group_size: '4-40 person',
      facilitation_level: 'Beginner',
      material: 'Paper and Pens to keep points total',
      description:
        "This is a fun icebreaker or energizer where participants are asked “What's in the bag?” It's a simple way to engage people and have fun getting to know each other, it gets participants to step into the space together. Each team gets points for any items that are called out that they have with them.",
      steps:
        "a black phone (or a silver phone, rosegold, etc.)- an environmental water bottle- a hair tie-a pen- a lip balm- a computer with at least 1 sticker on it -someone else's business card- a train ticket, etc.",
      tool_origin: 'Mystery',
      price: 18,
      picture: 'picture',
      status: 'not_active',
      created_at: '2021/08/19 14:34',
    },
    {
      id: 6,
      category_id: '7',
      name: 'The Circle of Trust',
      time_frame: '30-60 min',
      group_size: '2-10 person',
      facilitation_level: 'medium',
      material: 'Can be done digitally and manually with pen and paper.',
      description:
        'The Circle of Trust is a tool that can be used both individually and for groups. You can rate your circle of trust - think of your inner circle; work, school, or another group - to see how diverse the group of people you trust is. This tool helps to uncover unconscious, affinity bias.',
      steps:
        'Step 1 Choose 5 of your people at work/school/another group - think of them as your inner circle - the people you consider trustworthy and whose counsel you seek in making decisions.',
      tool_origin: 'France',
      price: 25,
      picture: 'picture',
      status: 'active',
      created_at: '2018/02/26 14:34',
    },
  ]);
};
