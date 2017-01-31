/*
----------------------------------------------------------------------

                          Swig Intro

----------------------------------------------------------------------

The stuff you can do with swig:

----------------------------------------------------------------------

Make sure it is set up properly:
*/
        const express = require( 'express' );
        const routes = require( './routes' );
        const chalk = require( 'chalk' );
        const swig = require( 'swig' );
        const app = express();

        swig.setDefaults( { cache: false } );
        app.set('view engine', 'html');
        app.engine('html', swig.renderFile);

//----------------------------------------------------------------------

        //Template.html file:
 
        <div id='contentBox' class="container">
            {% block content %}                   // 'content'  is defined and associated with the index.html file 
            {% endblock %}                        //            with the index.html file 
        </div>


        //index.html:

        {% extends './template.html' %}
        
        {% block content %}
            <div id='linkID' class="well">
                    <h5>Link: Product Maintenance - Add/Edit a Product</h5>
            </div>
            <div id='contentHead'> 
                <h3>Products:</h3>
                <button class="btn btn-primary"><a href='/addProdForm/{{product.id}}'>Add Product</a></button>
            </div>

        {% endblock %}

//----------------------------------------------------------------------
        
        //another example:    
        

        % block content %}
        
              {% if showForm %}
                <div> 
                    <br><h4>Enter a Tweet:</h4><br>
                </div>
                <form action="/tweets" method="POST">
                  <label for="name_field">Name:</label>
                  <input name="name" type="text" id="name_field" placeholder='FN... LN...' />
                  <label for="text_field">Text:</label>
                  <input name="text" type="text" id="text_field" style="width: 350px;" placeholder= 'Type your tweet...' />
                  <input type="submit" value="Submit" />
                </form>
              <!-- display tweets here -->
              {% endif %}
              
              {% if showUser %}
              
                {% for tweet in tweets %}
                
                  <dd id='name'><a href="/tweets/{{tweet.id}}">{{tweet.id}}</a>
                    <a href="/users/{{tweet.name}}"><strong>{{tweet.name}}:</strong></a>
                  </dd>
                  <dd id= 'tweet'>{{tweet.content}}</dd>
                  <dd id= 'space' class= 'text-muted'></dd>
               
                {% endfor %}
                
              {% endif %}

        {% endblock %}

//----------------------------------------------------------------------


















*/
