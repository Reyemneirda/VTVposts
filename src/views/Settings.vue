<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col m6 offset-m3 s12">
          <h1 class="center-align">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="input-field">
                <input class="validate" type="text" placeholder="URL of profile picture" />
              </fieldset>
              <fieldset class="input-field">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name" />
              </fieldset>
              <fieldset class="input-field">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="input-field">
                <input class="form-control form-control-lg" type="text" placeholder="Email" />
              </fieldset>
              <fieldset class="input-field">
                <input class="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <button class="btn waves-effect waves-light green right">Update Settings</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>