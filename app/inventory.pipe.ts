import {Pipe, PipeTransform} from '@angular/core';
import {Music} from './music.model';

@Pipe({
  name: "Inventory",
  pure: true
})


export class InventoryPipe implements PipeTransform {
  transform(input: Music[], desiredInventory) {
    // console.log(desiredInventory);
    // console.log(word2);
    // console.log(word3);
    // console.log(word4);
    // console.log(word5);
    // console.log(word6);

    var output: Music[] = [];
    if(desiredInventory === "notInInventory") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].inInventory === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInventory === "inInventory") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].inInventory === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
