import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], desiredSort){
    var output: Keg[] = input.sort();
    if (desiredSort === "sorted"){
      input.sort(function(a: Keg, b: Keg){return b.price-a.price})
      console.log("Santa Baby")
      return output;
    } else if(desiredSort ==="unsorted") {
      console.log("Christmas Tree")
      return output;
    }

    // var output = input.sort(function(a: Keg, b: Keg){return b.price-a.price});
    // console.log(output);
    // return output;
  }
}
