                                                  //  js dom class - 1 
 /*   
 
🔹 What is DOM Manipulation?

Manipulation means making changes to the HTML document using JavaScript via the DOM.

It involves:

Accessing elements

Changing content or attributes

Adding/removing elements

Changing styles
    


*/
    
                                                  //How to access elelement?
    
    //--------------------------------
    // 1.Selection of element?
    //--------------------------------
    
    //1.a: getElementById
        let a=document.getElementById("r")//selection of h1 element with id r //note that you can write it as 'r' ie; in single appostrophy too.
        a.textContent="Namaste! Aap ka kya naam hai?"//and then changing its content
                                                  
    //1.b: getElementByTagName
        let s=document.getElementsByTagName("p")
        s[0].textContent="ye paragraph ek hai"
        s[1].textContent="ye paragraph do hai" 
        
    //1.c: getElementByClassName
        let s1=document.getElementsByClassName("re")
        s1[0].textContent="dollor upar jaa raha hai"
        s1[1].textContent="Euro upar jaa rha hai"

    //1.d: querySelector
    //it can be used to select everytype alone which above you discussed individually
                                                  
      var h2=document.querySelector("#tr")//here the h2 element of id tr got selected 
      h2.textContent="Namaste! Aap Kaise hain?"//here again that original text content in h2 got changed
    
      var s2=document.querySelector('h1')//selector affects only first h1 remaining h1 remains unaffacted now to affect all of them we need to use querySelectorAll
      s2.textContent="Hello Donald bhai"//here in h1 we have changed it content
    
      let re=document.querySelector('.rs')//here the h2 elelement with class rs got selected
      re.textContent="Bhartiya Rupya gir raha hai"
    
    //1.e: querySelectorAll
      Containers=document.querySelectorAll(".container")
      Containers.forEach( container=> container.textContent="Ye sabhi div prr lagg jayega jaha ka class" );//note that at the place of container=>container. you can put any variable like s=>s. then also it will work fine.
        
                    // querySelector Vs querySelectorAll

    // with the help of querySelector only the FIRST .dabba will be selected and changed ie;
    
       let boxe=document.querySelector('.dabba');
       boxe.style.color='blue';

    // with the help of querySelector ALL .dabba will be selected and changed
       
        let allboxes=document.querySelectorAll('.dabba')
        allboxes.forEach(d=>d.style.backgroundColor='lightblue')


   
    //------------------------------------
    // 2. Modifying element in JavaScript
    //------------------------------------
    
    // 2.a: 🔹 1. textContent
    /*
    ✅ What it does:
    Sets or gets the text content of an element.

    Ignores HTML tags — treats them as plain text.

    Safe to use when you want to insert just text (no formatting).

    📚 Syntax:
    javascript
    Copy
    Edit
    element.textContent = "New text here";
    🧪 Example:
    html
    Copy
    Edit
    <p id="demo">Original Text</p>

    <script>
      var para = document.querySelector("#demo");
      para.textContent = "<b>This is new</b>";  // This will appear as plain text, not bold
    </script>
    🧾 Output on Page:
    vbnet
    Copy
    Edit
    <b>This is new</b>   ← displayed as text, not bold
    */
                                                
     // 2.b. innerHTML
        
       //✅ What it does:
       
       //Sets or gets the HTML content of an element.
                                                   
       //Parses and applies any HTML tags inside the string.
                                                   
       //Use this when you need formatting like bold, italic, lists, etc. 

        // Now use innerHTML to apply bold formatting
       let para1=document.querySelector("#demo")
       para1.innerHTML="<b>This is bold</b>"//this will appear in bold
       // Now use innerHTML to apply italic formatting
       let para2=document.querySelector("#tt")
       para2.innerHTML="<i>Hi inner HTML <i>"
       let para3=document.querySelector("button")
       para3.innerHTML="<i>Starting...</>"


    

    //------------------------------------
    //------------------------------------
    // 3. How to change CSS of an element
    //------------------------------------
     //------------------------------------  
    
    /* 


    
    //-------------------------------------------
       3.a: ✅ How to Change CSS of an Element
    //-------------------------------------------

        JavaScript allows you to directly modify the style of any selected element using the .style property.

        📚 Syntax:
        javascript
        Copy
        Edit
        element.style.propertyName = "value";
        ⚠️ Important:
        Always use quotes around the CSS value ('red', '20px', etc.)

        Convert CSS property names from kebab-case to camelCase:

        font-family → fontFamily

        background-color → backgroundColor
        */
        
        var ee=document.querySelector('h1')//this whole stuff is getting applied to first h1 without affecting other h1's to do that you need to do querySelectAll
        ee.style.color="red"
        ee.style.fontFamily='Courier New'
        ee.style.backgroundColor='lightgray'

        var ee1=document.querySelectorAll('h1')
        ee1.forEach(s=>s.style.color='red')// here it effects all h1.

  
    //------------------------------------  
    // 3.b: ✅ How to Add or Remove a Class
    //------------------------------------
       
    
    //Instead of styling elements directly, a cleaner and scalable way is to add/remove CSS classes using classList.

    //🔹 .classList.add("className")
    //Adds a class to the element
    document.getElementById('ffa').classList.add('cmc')
    

    
    //🔹 .classList.remove("className")
    //Removes a class from the element
     document.getElementById('ffa').classList.remove('cmc')//when you comment this then the above code of class addition will show its effect






                    //------------------------------------------------------------------------------------------------
                    //------------------------------------------------------------------------------------------------
                     /*   🧾 How Can You Apply CSS in a Web Page?
                    //------------------------------------------------------------------------------------------------
                    //------------------------------------------------------------------------------------------------


                    There are 4 valid ways to apply CSS:

                    ✅ 1. External CSS → style.css file (Recommended for real projects)
                    🔹 How?
                    You must create a separate file, e.g., style.css, and link it in your HTML file:

                    🔸 HTML:
                    html
                    Copy
                    Edit
                    <head>
                      <link rel="stylesheet" href="style.css">
                    </head>
                    🔸 style.css:
                    css
                    Copy
                    Edit
                    h1 {
                      color: green;
                    }
                    📌 If you do NOT link it, this file has no effect — browser will ignore it.





                    ✅ 2. Internal CSS → <style> block inside HTML file
                    🔹 How?
                    Define CSS within the HTML file itself, inside the <head> tag.

                    🔸 Example:
                    html
                    Copy
                    Edit
                    <head>
                      <style>
                        h1 {
                          color: blue;
                        }
                      </style>
                    </head>




                    ✅ 3. Inline CSS → Style written directly inside HTML tag
                    🔹 How?
                    Apply CSS within the element’s opening tag using the style attribute.

                    🔸 Example:
                    html
                    Copy
                    Edit
                    <h1 style="color: red; font-size: 30px;">Hello</h1>
                    🟡 Only affects this one element.



                    ✅ 4. JavaScript Styling → Using .style or .classList
                    ⚠️ This is what you’re doing when you say “CSS is working without style.css”.

                    🔹 How?
                    Use JavaScript to dynamically change the style of elements.

                    🔸 Example 1: Direct style change
                    javascript
                    Copy
                    Edit
                    let h1 = document.querySelector('h1');
                    h1.style.color = 'purple';
                    h1.style.backgroundColor = 'lightgray';
                    👉 This does NOT need style.css. It’s handled completely by JavaScript in memory.


                    🔸 Example 2: Using a class (if class is defined)
                    javascript
                    Copy
                    Edit
                    let h1 = document.querySelector('h1');
                    h1.classList.add('highlight');
                    Now this highlight class must be defined either:

                    In a <style> tag

                    Or in a linked style.css file

                    css
                    Copy
                    Edit
                    // in style.css 
                    .highlight {
                      font-weight: bold;
                      color: orange;
                    }

                    or <style> tag 
                    HTML:
                    html
                    Copy code
                    <head>
                      <style>
                        .highlight {
                          font-weight: bold;
                          color: orange;
                        }
                      </style>
                    </head>

                    <body>
                      <h1 id="heading">Welcome</h1>

                      <script>
                        let h1 = document.querySelector('#heading');
                        h1.classList.add('highlight');
                      </script>
                    </body>

                    //NOTE:  you cannot place a <style> tag inside an element's opening tag like <h1>.



                      🔁 Final Summary Table
                    Method	                Needs style.css?	 Works if style.css is not linked?	   Scope
                    External CSS	        ✅ Yes	            ❌ No	                            Entire site
                    Internal CSS	        ❌ No	            ✅ Yes	                            That page only
                    Inline CSS	            ❌ No	            ✅ Yes	                            That one element
                    JavaScript .style	    ❌ No	            ✅ Yes	                            As per JS selection

                    🧠 Important Clarification for You
                    ✅ JavaScript does not require style.css to apply styles — because .style is not reading from any file.
                    Instead, it directly tells the browser:

                    “Hey, make this element red right now.”

                    So:

                    When you see your JS working, it’s not reading from style.css, it’s just setting CSS inline via code.

                    That’s why it works even without any CSS file.
                    💡 Real-Life Advice
                    ✅ Use style.css for large & clean styling.

                    🔁 Use JavaScript .style or .classList for dynamic, condition-based, or user-triggered styling (like button click).

                    */


     // 3.b.1: External CSS
                 
                        /*
                        ✅ 1. External CSS
                            
                        🔹 style.css
                            css
                            Copy code
                            // style.css 
                            h1 {
                              color: green;
                              font-family: Arial;
                            }
                            
                            🔹 HTML
                            html
                            Copy code
                            <!DOCTYPE html>
                            <html>
                            <head>
                              <link rel="stylesheet" href="style.css">
                            </head>
                            <body>
                              <h1>External CSS Example</h1>
                            </body>
                            </html>
                            
                            🟡 Note: Must have style.css file in the same folder, or correct path.*/
                        
                        
                        /*
                        
                        ✅ 2. Internal CSS (<style> inside <head>)
                            
                        🔹 HTML
                            html
                            Copy code
                            <!DOCTYPE html>
                            <html>
                            
                            <head>
                              <style>
                                h1 {
                                  color: blue;
                                  font-family: 'Courier New';
                                }
                              </style>
                            </head>
                            
                            <body>
                              <h1>Internal CSS Example</h1>
                            </body>
                            </html>
                        */

                        
                        /* 
                        
                        ✅ 3. Inline CSS
                                🔹 HTML
                                html
                                Copy code
                                <!DOCTYPE html>
                                <html>
                                <head></head>
                                <body>
                                  <h1 style="color: red; font-family: Verdana;">Inline CSS Example</h1>
                                </body>
                                </html>
                                ✅ Direct styling written inside the element.
                        
                        
                        */

                        
                        
                        /*

                        ✅ 4. JavaScript Styling
                                🔹 HTML
                                html
                                Copy code
                                <!DOCTYPE html>
                                <html>
                                <head>
                                  <style>
                                    .highlight {
                                      color: orange;
                                      font-weight: bold;
                                    }
                                  </style>
                                </head>
                                <body>
                                  <h1 id="jsStyle">JavaScript CSS Example</h1>
                                
                                  <script>
                                    // Direct styling
                                    document.getElementById("jsStyle").style.backgroundColor = "lightgray";
                                
                                    // Class-based styling
                                    document.getElementById("jsStyle").classList.add("highlight");
                                  </script>
                                </body>
                                </html>
                            */
            
            
                                // Direct styling in js
                                document.getElementById("fi").style.backgroundColor = "lightgray";            
                                // Class-base styling in js
                                document.getElementById("fi").classList.add("highlight");

                            /*
                               📌 Final Tip:
                                
                                 Way	                    Best Used For
                                
                                 External CSS	            Clean, reusable styles for full projects
                                
                                 Internal CSS	            Small projects or quick demo pages
                                
                                 Inline CSS             	Quick testing or single element overrides
                                
                                 JS                         Styling	Dynamic changes (on click, hover, etc.)



                            */





//----------------------------------------
//----------------------------------------
// 4. creating and deleting element
//----------------------------------------
//----------------------------------------


//-------------------------------------------
//  4.a: Creating Elements 
//-------------------------------------------

//When we create an element using JavaScript, it does not automatically appear on the page. We must also add (append) it to the DOM.

/*

🔹 Steps for Creating and Adding:
Step 1: Create the Element

javascript
Copy code
let h1 = document.createElement("h1");  // creates an empty <h1> element
h1.textContent = "Hello World";         // adds text inside the <h1>
h1.classList.add("heading");            // adds a class to the element (optional)

Step 2: Add it to the Page

javascript
Copy code
document.querySelector("body").appendChild(h1);  // adds the <h1> at the end of body
✅ Result on Page:

html
Copy code
<h1 class="heading">Hello World</h1>
You can also add to a div, section, or any container by using document.querySelector(".container").appendChild(h1);

*/

//step1: creating and adding:
let ves=document.createElement("h1") //creates an empty <h1> element
ves.textContent="This h1 tag was created using JS!"       //adds text inside the <h1>
ves.classList.add("rdx")

//step2: Add it to the page
document.body.appendChild(ves) //or you can write like document.bodySelector("body").appendChild(ves) too.// adds the <h1> at the end of body
// appendChild(ves) because parent is body and child is the one which you are adding

//----------------------------------------
// 4.b. Deleting or removing elements
//----------------------------------------

//Method 1: elemetns.remove()
// Easiest way to remove an element directly.

let rrr=document.querySelector("button") //Selects the button 
rrr.remove();// removes only the first button (just comment it to see the difference)

/*
        🔹 Method 2: parent.removeChild(child)
        ✅ Traditional way; used when you want more control.

        javascript
        Copy code
        let btn = document.querySelector("button");
        document.querySelector("body").removeChild(btn); // removes button from body
        ⚠️ This works only if the element has a parent.
            ie:[You are telling JavaScript:

            “Go to the <body> element (the parent), and remove the btn element (the child) from it.”

            ⚠️ Problem arises if:
            The btn element is not inside the <body>, or

            The element was already removed, so it has no parent left.]
*/





//-------------------------------------------------
//-------------------------------------------------
//5.📘 Event Handling in JavaScript
//-------------------------------------------------
//-------------------------------------------------


/*
🔹 What is an Event?
An event is a change or action that happens in the browser, usually triggered by:

The user (click, type, scroll, etc.)

The system (page load, resize, etc.)

🔹 Event Listener
An event listener listens for a specific event on an element.
If that event occurs, the listener executes the associated function.

⚠️ Note:
If no listener is added for an event, even if the event occurs, nothing will happen.
*/



//5.a: 📌 1. click (Mouse Event)
//When?
//Occurs when an element is clicked.
let vrsu=document.querySelector("#brsu")
vrsu.addEventListener('click', function(){alert("You clicked the button!")})
//🔹 Used for: Buttons, links, icons — user interactions.


//5.b: 📌 2. mouseover (Mouse Event)

document.getElementById("hoverdiv").addEventListener("mouseover", function(){this.style.backgroundColor="red"})
document.getElementById("hoverdiv").addEventListener("mouseout",function(){this.style.backgroundColor="green"})


//5.c: 📌 3. keydown (Keyboard Event)
//When?
//Fires when any key is pressed down.
document.getElementById("textInput").addEventListener("keydown",function(event){console.log("key pressed: ", event.key)})//at the place of even you can put anything ie; any variable.
//🔹 Used for: Game controls, form shortcuts, live validation.

//5.d: 📌 4. input (Form Event)
//When?
//Fires every time the input value changes (by typing, pasting, etc.)

document.getElementById("liveinput").addEventListener("input",function(){document.getElementById("output").textContent=this.value})
//🔹 Used for: Live preview, validation, search suggestions.



//5.e: 📌 5. change (Form Event)
//When?
//Fires when the element loses focus and the value is changed (used mostly with <select>, <input type="checkbox">, etc.)
document.getElementById("dropdown").addEventListener("change", function(){alert("You Selected: " +this.value)})
//🔹 Used for: Dropdowns, checkboxes, radio buttons, date pickers.