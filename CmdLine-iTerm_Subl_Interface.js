/*
-----------------------------------------------------------------------------------

                       Terminal_Sublime interface issues.
                       
-----------------------------------------------------------------------------------

Hi everyone.

In some of the videos about git, I saw Karen initiating sublime from within the console
....by typing the command "subl". She followed that with a period and got the local directory tree 
to display within the application after it initialized.

I can't for the life of me figure our how she got that to work....any ideas.   
....I, obviously, can initiate sublime from the applications menu, but didn't want to do that anymore.


....I tried setting the core.editor within the config command.

...I followed the directions from within the sublime documentation.

...I am now at a loss.

Any help would be greatly appreciated.

regards,
Vince

-----------------------------------------------------------------------------------

Vince:

I am assuming you have a mac.

When you open your terminal window there is hidden file called .bash_profile

Edit the file and insert the following line:

ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl

I inserted the line before the last line on my list, but every .bash_profile is different.

Let me know how it goes.

Cheers, 

Mauro

-----------------------------------------------------------------------------------

Hi Mauro,

Thank you very much for replying.  Although I could not get what I wanted to work correctly, 
I am posting a log of what I discovered as I went through investigating the information you gave me.....as follows:

Background:

The snippet:  "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl"  

      -  points to where sublime is physically located on the machine.
      -  in my case sublime was located in a different Applications directory (off the Home directory)
         so I appended that snippet with the following:  
                        ln -s "${HOME}/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl
            -      The additional snippet:   /bin/subl  relates to adding "subl" to the bin directory off the root.
         This snippet in essence adds the command "subl" to that folder/directory along with the other commands that live there.

The terminal window hidden file, in my case, is .profile and not .bash_profile.   

What happened:

I closed the console (you need to start the console fresh if you want the profile to run for that session).

I opened .profile file using Sublime.  As an FYI, when you use open within Sublime you get a finder window.  
In order to see hidden file you must do the following:    type:   Cmd + ^ + . 
(This means the Cmd key plus hold the shift key then hit the period key).  You will then see the hidden files.

I entered and then saved the modified command:  
              ln -s "${HOME}/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl 

I opened the console again and the console ran fine but had an error:  

                 Last login: Wed Dec  7 11:35:47 on ttys000
                 ln: /bin/subl: Operation not permitted
                 design-admins-Mac-Pro-370:~ designadmin$



......so the end result is that I am closer to accomplishing what I want to do, but there is an additional hurdle.  
That is I need to figure out how to get the console to allow me to access and add to the bin file.


I am going to keep researching, but I need to take a break from this so i can continue to move forward 
with the foundations steps for the next few hours.  If anyone has any ideas, I would greatly appreciate it.

regards,

Vince

-----------------------------------------------------------------------------------

Hey Vince!

I would try the same command, but use `sudo` before the command. This will allow you to run the command as an administrator.  You will be prompted for your computer password.

Additionally, if that doesn't work I would recommend pasting `alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl" into your bash profile (`~/.bash_profile` or `~/.bashrc`). Then if you restart your terminal, you should be able to use the 'subl' command.

Here is a post on Discuss that goes into a bit more detail. 

In the future, questions like this are better asked on Discuss, so that the cohort doesn't get a surplus of emails. Discuss allows everyone to see all the questions and reply to threads more easily.

Hope that helps!

Karen

-----------------------------------------------------------------------------------

A few people have asked how to use the subl command in the mac terminal. Unfortunately, just installing Sublime Text won't make this command available, but fortunately it's easy to implement!

From the command line, copy and paste this command:
For Sublime Text 3:
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl

For Sublime Text 2:
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl

If this doesn't work, let me know! I'm assuming that a) You are using a Mac b) You installed Sublime in your Applications folder and c) you have ~/bin directory in your path, which is usually default!

Here is a link14 that goes more into the details of using Sublime from the command line.

-----------------------------------------------------------------------------------

Hey Karen!

I've tried the command you posted and I keep getting and Operation not permitted error message, even if I use sudo. I don't think I have ~/bin directory in my path (it was /bin), but when I changed that, I still get an error message.

Any advice?

Dani

-------------

Hey Danielle,

Try pasting this line:
alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"

into your bash profile. Your bash profile is usually a hidden file in your ~/ directory and will have a name like .bashrc. You'll need to restart your terminal for changes to take effect.

Can you post a screenshot of your 'Operation not permitted' error?

-----------------------------------------------------------------------------------


*/
