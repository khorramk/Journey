# Journey
    a adventourous travel review social media app for users to minimise obstacles in their travel life.

## in this docs:
    1. whats in this repo?
    2. guides of local installation
    3. testing
    4. contribution

### what is in this repo?
    this repo contains all the code that powers the app
    includes:
        - databases code
        - sql migrations
        - configuration
        - back end codes
        - front end codes
        - static files

### guides for local installation
    requirements:
        - OS any
        - terminal installed or use cmd
        - github account
        - php 7 or above
        - Mysql database
        - composer installed
        - node js and npm
        - yarn

    To get strated:

    - press the fork button if your using github.
    - clone the repo into you local machine if you know how to do so
    - or go to steps topic.
    - after cloning `cd` into the project folder
    - run `composer install` this will install all the depencies for the app running locally
    - then run `yarn` this will install all the assets of js files.
    - then run `php artisan migrate` make sure  mysql is on locally if your not using homestead.
    - the `migrate command will create all the databases you have coded in sql and in databases/migration/ folder.
    - finally run `php artisan serve` this load on a local server based on server.php file.

### testing 
    - to test the app you first need to test in your local machine: is it is working or not
    - upon first instance you may get some view error or page says 404 error.
    - after succesful working
    - for testing and adding new feature:
        1. branch out from master branch and use kebab case for naming the branch
        2. each branch name should be  based on the action you are doing:
            for example - i want to make picture layouts so the branch should be: make-picture-layouts
        3. after testing you may want to push the branch to the repo by using `git push origin make-picture-layouts`
        4.  number 3 step will create pull request in your fork repo, then you may want to accept the  pull request        and merges the changes.
        5. or you want it to compare across forks and the original repo then make the pull request.
        6. note pull request in the original repo will reviewd by the owner of that repo. They may suggest changes or     open another issue. please don't be disheartend by the fact your solution did not work. never give up to       code.

### contribution
        
        See testing. Those who contribute will be added to app development.

### cloning steps
    1. copy the repo url from clone button  in yuor github repo
    2. paste into terminal and press enter
    3. repo is copied into local machine.

## Licence

    Journey is MIT licenced, as found in the [Licence](https://github.com/khorramk/Journey/blob/master/LICENSE) file.
