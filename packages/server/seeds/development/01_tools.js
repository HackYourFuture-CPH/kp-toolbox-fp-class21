/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tools').del();
  await knex('tools').insert([
    {
      name: '1-2-4-ALL',
      time_frame_min: 5,
      time_frame_max: 30,
      group_size_min: 2,
      group_size_max: 100,
      facilitation_level: 'Beginner',
      materials: 'A4 paper &amp; pens',
      pitch:
        'Rapidly generate ideas and tap into the collective knowledge with this simple tool.',
      description:
        'You can immediately include everyone regardless of how large the group is. You can generate better ideas and more of them faster than ever before. You can tap the know-how and imagination that is distributed widely in places not known in advance. Open, generative conversation unfolds. Ideas and solutions are sifted in rapid fashion. Most importantly, participants own the ideas, so follow-up and implementation is simplified. \nStart alone, then in pairs, then foursomes, and finally as a whole group',
      source: 'Liberating Structures',
    },
    {
      name: 'STINKY FISH',
      time_frame_min: 5,
      time_frame_max: 30,
      group_size_min: 2,
      group_size_max: 40,
      facilitation_level: 'Medium',
      materials: 'Printed A4 papers with a large outline of a fish',
      pitch:
        'Share fears, anxieties and uncertainties related to the program theme to create openness within a group. ',
      description:
        'A short activity to run early in a program focused on sharing fears, anxieties and uncertainties related to the program theme. The purpose is to create openness within a group. The stinky fish is a metaphor for "that thing that you carry around but don’t like to talk about; but the longer you hide it, the stinkier it gets." By putting stinky fish (fears and anxieties) on the table, participants begin to relate to each other, become more comfortable sharing, and identify a clear area for development and learning.',
      source: 'Hyper Island',
    },
    {
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
      source: 'Liberating Structures',
    },
    {
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
      source: 'unknown',
    },
    {
      name: 'WORLD CAFÉ',
      time_frame_min: 60,
      time_frame_max: 120,
      group_size_min: 2,
      group_size_max: 40,
      facilitation_level: 'Beginner',
      materials: 'Flipchart Paper, Markers',
      pitch:
        'Share fears, anxieties and uncertainties related to the program theme to create openness within a group. ',
      description:
        'World Café is a simple yet powerful method, originated by Juanita Brown, for enabling meaningful conversations driven completely by participants and the topics that are relevant and important to them. Facilitators create a cafe-style space and provide simple guidelines. Participants then self-organize and explore a set of relevant topics or questions for conversation.',
      source: 'World Café Community Foundation',
    },
    {
      name: 'OPEN SPACE TECHNOLOGY',
      time_frame_min: 60,
      time_frame_max: 120,
      group_size_min: 2,
      group_size_max: 100,
      facilitation_level: 'Medium',
      materials: 'Flipchart Paper, Markers, post-it, A4 papers',
      pitch: 'Liberate Inherent Action and Leadership in Groups of Any Size.',
      description:
        'When people must tackle a common complex challenge, you can release their inherent creativity and leadership as well as their capacity to self-organize.\n\nOpen Space makes it possible to include everybody in constructing agendas and addressing issues that are important to them. Having co-created the agenda and free to follow their passion, people will take responsibility very quickly for solving problems and moving into action. Letting go of central control (i.e., the agenda and assignments) and putting it in the hands of all the participants generates commitment, action, innovation, and follow-through. You can use Open Space with groups as large as a couple of thousand people!',
      source: 'Harrison Owen',
    },
  ]);
};
