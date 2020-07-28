$(() => {
    
    //make API call to endpoint: /api

    $.getJSON('/api', updateDiscussion)

    $('.feedback-form').submit((e) => {
        e.preventDefault();
        console.log("submitted!!")

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val(),
        }, updateDiscussion)
    })

    $('.feedback-messages').click((e)=>{
        e.preventDefault();
        console.log(e.target.className)
        if (e.target.className == "glyphicon glyphicon-remove") {
            
            $.ajax({
                url: `/api/${e.target.id}`,
                type: 'DELETE',
                success: updateDiscussion
            })
        }
    })

    function updateDiscussion (data) {
        var output = ""
        $.each(data,function(key, item) {
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove">x</span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title m-3 h4">' + item.title + ' <div class="feedback-name label label-info pl-3 h6 text-muted">' + item.name + '</div></div>';
            output += '           </div>';
            output += '           <div class="feedback-message m-3 pb-3">' + item.message + '</div>';
            output += '         </div>'; 
            output += '       </div>';
            output += '     </div>';
        });

        // find the div with .feedback-message class
        // fill div container with output messages
        $('.feedback-messages').html(output)  
    }

})