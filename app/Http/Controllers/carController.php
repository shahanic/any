<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;


class carController extends Controller
{
    //
    public function saveCar(Request $request){
        if($request->id){
            $new = Test::find($request->id);
        }else{
            $new = new Test;  
        }

        $new->brand = $request->brand;
        $new->model = $request->model;
        $new->year_bought = $request->year_bought;
        $new->status = $request->status;
        $res = $new->save();
        return $res;
    }
    
    public function getCars(){
        return Test:: all();
    }

    public function deleteCar(Request $request){
        Test::where('id', $request->id)->delete();
        return 1;
    }
}
