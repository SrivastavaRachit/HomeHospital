import React from 'react'

 const Login = () => {
  return (
    <div>
    <head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" integrity="sha256-wT6CFc7EKRuf7uyVfi+MQNHUzojuHN2pSw0YWFt2K5E=" crossorigin="anonymous" />

</head>
<div class="ui raised very padded center aligned text container segment"/>
<h1 class="ui header">Log in</h1>
<br/>
<div class="field">
 <div class="ui left icon input">
<i class="mail outline icon"></i>
  <input type="email" name="email" placeholder="Email Address" autofocus="true"/>
</div></div>
<br/>
  <div class="field">
<div class="ui left icon input">
<i class="lock icon"></i>
  <input type="password" name="password" placeholder="Password"/>
</div></div>
<br/>

<div class="field">
<div class="ui left icon input">
<i class="lock icon"></i>
 <input type="password" name="password_confirmation" placeholder="Password Confirmation"/>
</div></div><br/>

<div class="actions">
  <button class=" ui large teal button" type="submit">Log in</button>
</div>
<br/>
<p/>Don't have an account? <a href="#"> Sign up </a>
</div>
    </div>
  )
}
export default Login;