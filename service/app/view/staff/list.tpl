<html>
  <head>
    <title>Hacker Staff</title>
    <link rel="stylesheet" href="/public/css/staff.css" />
  </head>
  <body>
    <h4>数据库列表展示</h4>
    <ul class="staff-view view">
      {% for item in arr %}
        <li class="item">
          <span>{{ item.name }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>