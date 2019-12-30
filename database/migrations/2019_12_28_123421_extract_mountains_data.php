<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExtractMountainsData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $url = "http://www.lakedistrict-walks.co.uk/Mountains/Alpine_4000m.html";
        $data = strip_tags(file_get_contents($url));
        $matches = array();
        preg_match('/\bExa|ins([^\b]+)/', $data, &$matches);
        
        for ($i = 1; $i < count($matches); $i++) {
        echo "Match: '".$matches[$i]."'\r\n";
        }


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
