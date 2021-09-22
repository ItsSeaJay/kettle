var exercise_list = document.getElementById('exercise-list');
const num_exercises = 3;
var exercises = [
  "Superimposed Lines",
  // "Ghosted Lines",
  "Ghosted Planes",
  "Tables of Ellipses",
  "Funnels",
  // "Plotted Perspective",
  "Rough Perspective",
  // "Rotated Boxes",
  "Organic Perspective",
  "Organic Arrows",
  "Organic Forms with Contour Lines",
  "Texture Analysis",
  "Dissections",
  "Form Intersections",
  "Organic Intersections"
];

// Generate the exercises
if (exercises.length > 3) {
  for (var i = 0; i < num_exercises; i++) {
    var exercise_index = Math.floor(Math.random() * exercises.length);
    var node = document.createElement("li");
    var textnode = document.createTextNode(exercises[exercise_index]);

    exercises.splice(exercise_index, 1); 

    node.appendChild(textnode);
    exercise_list.appendChild(node);
  }
}
