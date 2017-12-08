import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], desiredSort){
    var output: Keg[] = input;
    if (desiredSort === "highToLow"){
      input.sort(function(a: Keg, b: Keg){return b.price-a.price})
      return output;
    } else if(desiredSort === "lowToHigh") {
      input.sort(function(a: Keg, b: Keg){return a.price-b.price})
      return output;
    } else if(desiredSort === "abvHighToLow") {
      input.sort(function(a: Keg, b: Keg){return b.alcoholContent-a.alcoholContent})
      return output;
    } else if(desiredSort === "abvLowToHigh") {
      input.sort(function(a: Keg, b: Keg){return a.alcoholContent-b.alcoholContent})
      return output;
    }

    // var output = input.sort(function(a: Keg, b: Keg){return b.price-a.price});
    // console.log(output);
    // return output;
  }
}
