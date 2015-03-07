//
// GOOD JSX
//
<div className key>
<div /*cats*/ className /*dogs*/ key>
<div /*cats*/className/*dogs*/ key>
<div
  /*cats*/className // dogs
  // more cats
  />
<div className='MyClass' key>
<div className='MyClass' key={1} >
<div className='MyClass' key={1} />
<div className = 'MyClass' key={1} />
<div className = 'MyClass' key={() => this.setState({})} />
<div class-Name= 'MyClass' key />
<div className= 'MyClass' key =  '' />
<div className = 'MyClass'
  key={1} />
<div
  className = 'MyClass'
  key={1} />
<div className
  = 'MyClass' key={1} />
<div className
  =
  'MyClass' key={1} />
<div className/*cats*/= 'MyClass' key />
<div className=/*dogs*/'MyClass' key />
<div className/*cats*/=/*dogs*/'MyClass' key />

//
// BAD JSX
//
<div className='MyClass' key / x>
<div className? />
<div className? = 'MyClass' key={1} />
<div .className= 'MyClass' key={1} />
<div clas#sName= 'MyClass' key />
<div class:Name ='MyClass' key />
<div className 'MyClass' key />
<div
  key
  {1} />
<div className= 'MyClass' key=cats />
<div className= 'MyClass' key==cats />
<div className= 'MyClass' key== cats />
<div className= 'MyClass' key=
cats />
<div className='MyClass' = 'cats' key= >
<div = key= >
<div
  =
  key= >
<div
  key
  = >
<div
  'asdasd'>
<div < >
< >
<div className 'MyClass' key=cats />
<div className= 'MyClass' key=cats
