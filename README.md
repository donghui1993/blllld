# about
this is an text model element template
like this
* common element tag method
```
<div class="someclass">
	<span>this is text <span> inner node </span></span>
</div>
```

* by brt orangejs 

```
<script type="brt/orange">
.someclass>span{ this is text }{ inner node }
</script>
```

* or by format orangejs

```
<script type="format/orange" space="2">
.someclass
  span{ this is text }
    { inner node }
</script>
```

it is pretty cool isn`t it?

it will be resolved as an abstract syntax dom tree like this

```

{
	node:Node.ELEMENT_NODE,
	tag:"div",
	attrs:[{
		name:'class',
		value:'someclass'
	}],
	children:[{
		node:Node.ELEMENT_NODE,
		tag:'span',
		children:[{
			node:Node.TEXT_NODE,
			value:' this is text '
		},{
			node:Node.ELEMENT_NODE,
			tag:'span',
			children:[{
				node:Node.TEXT_NODE,
				value:' inner node '
			}]
		}]
	}]
}

```
