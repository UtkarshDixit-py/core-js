//dom tree like structute, what is the usage, why we reqire DOM
//custom HTML attribute is it possible ? how to create it ? 
//dom manupilation
//life cycle of webcomponent, when will it initiate 
//do task (veg non veg list)

//---------------------------                                                         

// tree shaking
//webpack configurations try practically 
// dev dependencies vs dependencies
// node vs npm 
//use strict examples

(function(){
    var a = b = 3;
    })();
    
    console.log("a defined? " + (typeof a !== "undefined") );
    console.log("b defined? " + (typeof b !== 'undefined') + b);
    
    
    // "use strict";
    
    // let abc = 10;
    // abcc= 100; 
    
    // console.log("abcc",abcc)
    
    function foo1()
    {
    return {
    bar: "hello"
    };
    }
    
    function foo2()
    {
    return
    {
    bar: "hello"
    };
    }
    console.log("foo1 returns:");
    console.log(foo1());
    console.log("foo2 returns:");
    console.log(foo2());
    

//--------------------------------------------
    //show in UI

//Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
//try with display none with list task
//sonar lint
//more advantages of webpack
//webpack plugins names 
//gulp,webpack, grunt, what is the difference between these
//dependencies vs devdependencies
    
    
    