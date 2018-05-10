<?php
	function dingtalk_curl($url,$data=null){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        if (!empty($data)){
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            curl_setopt($curl, CURLOPT_HTTPHEADER,array('Content-Type: application/json;charset=UTF-8'));
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output,true);
    }
	
	$token = "764ab0c08b383599bc11f40061c83f6a";
	$post_data = array(
		"name" => "测试接口部门生成",
	    "parentid"=> "1",
	    "order"=> "1",
	    // 自动创建对应企业群
	    "createDeptGroup"=> false,
	    // 是否隐藏
	    "deptHiding" => false,
	    // 查看隐藏部门的其他部门列表 notrequired
	    "deptPerimits" => "",
	    // 查看隐藏部门的其他人员列表 notrequired
	    "userPerimits" => "",
	    // 是否仅可见自己
	    "outerDept" => false,
	    // 仅可见自己时配置额外可见人员
	    "outerPermitDepts" => "",
	    // 仅可见自己时配置额外可见部门
	    "outerPermitUsers" => "",
	    // 设置唯一标识字段
	    "sourceIdentifier" => "source",
	);
	// 创建部门的请求
	// $response = dingtalk_curl('https://oapi.dingtalk.com/department/create?access_token='.$token, json_encode($post_data));

	// 修改部门的请求
	$updateparam = array(
		// 先要通过get获取所有部门id
		'id' => '65319812',
		'name' => '测试更新部门接口',
	);

	$response = dingtalk_curl('https://oapi.dingtalk.com/department/update?access_token='.$token,json_encode($updateparam));

	var_dump($response);