let myStory = `Once upon a time[n], a brave named Jack[n] embarked[a] on a perilous[n] journey[n] 
  to find[a] the mythical of gold[n]. He through[v] treacherous[n] mountains 
  and over raging[v] rivers, facing many and obstacles[n] along the way. 
  Finally, after many months[a] of travel, Jack[n] the and his dreams[n] came true.`;

let inputN = document.createElement('input');
let inputV = document.createElement('input');
let inputA = document.createElement('input');


inputN.type = 'text';
inputN.placeholder = 'noun';
inputN.id = '1';

inputV.type = 'text';
inputV.placeholder = 'verb';
inputV.id = '1';

inputA.type = 'text';
inputA.placeholder = 'guss';
inputA.id = '1';

function myString (string) {
    let regx = /\[([^\]]+)\]/g; // that means to search for square braces and what is inside it
    let mySplitString = string.split(' ');
    let myNewString = '';
    
    for (let i = 0; i < mySplitString.length; i++) {
        let iMatch = mySplitString[i].match(regx); // iMatch is an object ['[n]'], ['[n]'], ['[n]'] we need to go inside it
        
        if (iMatch === null) {
          myNewString = myNewString + ' ' + mySplitString[i];
          
        } else if(iMatch !== null) { // if iMatch does not have [n] || [v] || [a] it will be null
      
            if (iMatch[0] === '[n]') { // iMatch is an object we need the value inside it
            
              let newString = string.replace(`${mySplitString[i]}`, inputN.outerHTML); // we can not replace a string with an object that is why we put inputN.outerHTML because it is a string
              myNewString = myNewString + ' ' + inputN.outerHTML + ' ';
              
              let paragraph = document.createElement('p');
              paragraph.innerHTML = newString;
              
            } else if (iMatch[0] === '[v]') { // iMatch is an object we need the value inside it
            
                let newString = string.replace(`${mySplitString[i]}`, inputV.outerHTML); // we can not replace a string with an object that is why we put inputN.outerHTML because it is a string
                myNewString = myNewString + ' ' + inputV.outerHTML + ' ';
                
                let paragraph = document.createElement('p');
                paragraph.innerHTML = newString;
                
              } if (iMatch[0] === '[a]') { // iMatch is an object we need the value inside it
            
                let newString = string.replace(`${mySplitString[i]}`, inputA.outerHTML); // we can not replace a string with an object that is why we put inputN.outerHTML because it is a string
                myNewString = myNewString + ' ' + inputA.outerHTML + ' ';
                
                let paragraph = document.createElement('p');
                paragraph.innerHTML = newString;
                
              }
          }
    }
    
  let div = document.createElement('div');
  div.innerHTML = myNewString;
  document.body.appendChild(div);

  let div2 = document.createElement('div');
  div2.innerHTML = myNewString;
  document.body.appendChild(div2);
    console.log(div2.length);
  
    let inputFields = document.getElementsByTagName('input');

    for (let i = 0; i < inputFields.length; i++) {
        console.log(i);
        inputFields[i].addEventListener('input', function(){
            inputFields[i + 14 ].placeholder = inputFields[i].value;
        })
    }
}

console.log(myString(myStory));


