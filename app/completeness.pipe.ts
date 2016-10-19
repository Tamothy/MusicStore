import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: true
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {
    // console.log(desiredCompleteness);
    // console.log(word2);
    // console.log(word3);
    // console.log(word4);
    // console.log(word5);
    // console.log(word6);

    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
