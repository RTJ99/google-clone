
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Google</title>
        <link rel="stylesheet" href="css/style.css" type="text/css">
        
    
    <ul>
        <li><div id="button1"><button>Sign In</button></div></li>
        <li><img src="grid.png" alt="grid" height="25" width="25"></li>
        <li><a href="">Images</a></li>
        <li><a href="">Gmail</a></li>
        
    </ul>
    </head>
    
    <body>
    <div id="container">
    
    <div style="text-align:center">
        <img src="google-logo.png" height="95" width="260" style="padding-top:135px"  alt=" google logo ">
    </div>
    
    <form method="GET" action="">
        <input id="searchtxt" class="search" title="Search" type="text" name="results"><br>
        <div id="buttons">
        <input type="submit" class="button" value="Google Search">
        <input type="submit"class="button"value="I'm Feeling Lucky">
        <div>
    </form>
    <div id="buttons">
    
    
    <?php

    include('simple_html_dom.php');

        $search = $_GET['results'];
        if(isset($_GET['results']) && $_GET['results'] != "")
            {
                
                echo "<h2>Your Search Result :<h2>";
            
            $url = "https://www.google.com/search?q=".str_replace(' ', '%20', $_GET['results']);
            
            // sendRequest
            // note how referer is set manually
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $body = curl_exec($ch);
            curl_close($ch);
            $domResult = new simple_html_dom();
            $domResult->load($body);

            foreach($domResult->find('a[href^=/url?]') as $link)
            
            echo $link ;
        }

?>
    <div id="buttons">
    
    </script>
    
    </div>
    
    
    </div>
    
    
    </body>
    
    
    </html>