


// tight greater-/less-than operations.

for (var i=1; i<table.rows.length; i++) {
  var row = table.rows[i]
  var data = {}
  for (var j=0; j<row.cells.length; j++) {
    data[top[j]] = row.cells[j].innerHTML;
  }
  data.push(data)
}



// illegal attribute name.
// missing equals, quotes
// and/or value.

<div class.Name />
<div className? />
<div $className />

<div = />
<div / />
<div < />

<div className= />
<div className=container />
<div className=='container' />
<div className'container' />



// comments between attributes,
// namespaced components, and
// non-alpha chars in tag/attribute names

<div /* comment */ onClick={this.onClick}>
  <Emoji.stuck_out_tongue />
  <StyledForms.Input
    $parent={this}
    has_emoji={true}
    /* here's another comment */
    className='styled-input'>
  </StyledForms.Input>
</div>
