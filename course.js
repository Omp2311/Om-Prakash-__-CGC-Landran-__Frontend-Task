// public/scripts.js
document.getElementById('add-module').addEventListener('click', () => {
    const module = document.createElement('div');
    module.classList.add('module');
    module.innerHTML = `
    <div class="menu-content">
                <img src="folder-icon.png" alt="Module Name">
                <input type="text" placeholder="Module Name" class="module-name">
                </div>  
    <div class="folder-content">
    
    <div class="resources">
        <div class="menu">
                
                <div>
                <button class="add-resource">Add Resource</button>
                <button class="delete-module">Delete Module</button>
                </div>
            </div>
    </section>
</body>
    </div>
            
    `;
    document.getElementById('modules').appendChild(module);
  
    module.querySelector('.delete-module').addEventListener('click', () => {
      module.remove();
    });
  
    module.querySelector('.add-resource').addEventListener('click', () => {
      const resource = document.createElement('div');
      resource.classList.add('resource');
      resource.innerHTML = `
      <style>
      body{
          display: flex;
          justify-content: center;
          align-items: center;min-height: 100vh;
          background-color: aliceblue;
          transition: .8s;
      }
      .box{
          position: relative;
          border-radius: 12px;
          width:350px;
          margin:0 auto;
          text-align: center;
          padding: 10px;
          background-color: beige;
  
      }
  
      .circle.head{
          display: inline-block;
          width:18px;
          height:20px;
          margin:0 auto;
          margin-top:6px;
          border-radius: 50%;
          left:0;
          right:0;
          background-color:#fff;
  
      }
  
      .circle.body{
          display: inline-block;
          width: 35px;
          margin:0 auto;
          margin-top:26px;
          height: 25%;
          border-radius: 50%;
          left:0;
          right:0;
          background-color:#fff;
  
      }
  
      .closer{
          display: block;
          position:absolute;
          width:40px;
          height:40px;
          top: 0;
          right: 0;
          color: tomato;
          font-size: 34px;
      }
  .closer:hover{
      background-color: red;
      border-radius: 0 12px 0 0;
      color: azure;
      cursor: pointer;
  }
  
  .box{
      margin-top: 43px;
  }
  label{
      display: block;
      position:absolute;
      font-size: 18px;
     color:blue;
     margin-top: -62px;
     margin-left: 18px;
     text-align: left;
     transition: 0.4s;
  }
  input{
      width: 95%;
      height:42px;
      margin: 10px 1px 28px 1px;
      padding:9px;
      font-size: 18px;
      color: rgb(0, 8, 14);
      border: 0cqb;
      outline: none;
  
  }
  input:focus~label,
  input:valid~label{
      margin-top: -95px;
      padding-left: 8px;
      color: rgb(237, 36, 43);
  }
   </style>
  </head>
  <body>
      <h4>FOLDER </h4>
      <section class="box">
          <div class="close">&times;</div>
          <div class="circle">
  <span class="head"></span>
  <span class="body"></span>
  
          </div>
          <div class="box">
              <div>
                  <label for="name">Resource File</label>
                  <input type="file"class="name" required="required">   
              </div>
              <br><br>
              <div>
                  <label for="name"> link</label>
                  <input type="link"class="name" required="required">   
              </div><br><br>
              <button class="submit">Submit</button>
          </div>
   
        <button class="delete-resource">Delete Resource</button>
      `;
      module.querySelector('.resources').appendChild(resource);
  
      resource.querySelector('.delete-resource').addEventListener('click', () => {
        resource.remove();
      });
  
      resource.querySelector('.upload-file').addEventListener('change', async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
  
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });
  
        const result = await response.json();
        console.log('File uploaded:', result);
      });
    });
  });