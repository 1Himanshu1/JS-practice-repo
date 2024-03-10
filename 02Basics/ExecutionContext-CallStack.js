// Inspect -> Sources -> Snippets (for seeing CALL STACK in real time through code)



// Javascript Execution Context : Jb bhi JS file run hoti hai, E.C Create hota hai
/* 
Step 1: GLOBAL EXECUTION CONTEXT
  sbse pehle GEC ka formation hoga aur "this" se isko refer kiya jayega (in browser -> this refers to window object)

  Step 1.2: FUNCTION E.C
  Step 1.3: EVAL E.C

Step 2: LOCAL EXECUTION CONTEXT

  Step 2.1: Memory Creation Phase: only memeory is allocated, not the actual values (except for function, they get their defintion also in this phase)
  Step 2.2: Code Execution Phase: All the values are allocated to variables and all functions are EXECUTED
    NOTE: Every Function Execution( be it be a nested function), creates a new LOCAL E.C , each time a new function is encountered(Step 2.1 to 2.2)
Step 3: After completion of its tasks, the Execution Context is DELETED
