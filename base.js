window.onload=function(){
	function Node(data,left,right){//node对象保存数据，其他节点链接
		this.data=data;//数据属性
		this.left=left;
		this.right=right;
		this.show=show;//方法
	}
	function show(){
		return this.data;
	}
	function BST(){//创建一个类来表示BST
		this.root=null;//初始化节点为null
		this.insert=insert;//添加一个insert方法
		this.inOrder=inOrder;//
		this.preOrder=preOrder;
    	this.postOrder=postOrder;
	}
	function insert(data){
		var n=new Node(data,null,null);
		if(this.root==null){
			this.root=n;
		}
		else{
			var current=this.root;//设根节点为当前节点
			var parent;
			while(true){
				parent=current;
				if(data<current.data){//如果插入数据<当前节点数据
					current=current.left;//就设新的当前节点为原节点的左节点
					if(current==null){//如果当前左节点为null，就插入这个位置
						parent.left=n;
						break;
					}
				}else{
					current=current.right;//新的当前节点为原节点的右节点
					if(current==null){//右节点为null就插入这个位置
						parent.right=n;
						break;
					}
				}
			}
		}
	}

	//中序
	function inOrder(node){
		if(!(node == null)){
			inOrder(node.left);
			console.log(node.show()+"");
			inOrder(node.right);
		}
	}	

	//先序
	function preOrder(node){
		if(!(node == null)){
			console.log(node.show()+"");
			preOrder(node.left);
			preOrder(node.right);
		}
	}

	//后序
	function postOrder(node){
		if(!(node == null)){
			postOrder(node.left);
			preOrder(node.right);
			console.log(node.show()+"");
		}
	}


	var array=['A','B','C','D','E','F','G'];
	var binTree=new BST();
	array.forEach(function (elem) {
	    binTree.insert(elem);
	});


	// console.log("中序遍历：");
	// binTree.inOrder(binTree.root);
	// console.log("先序遍历：");
	// binTree.preOrder(binTree.root);
	// console.log("后序遍历：");
	// binTree.postOrder(binTree.root);









}