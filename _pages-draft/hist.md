---
title: "history echo"
layout: default
permalink: "/h.html"
---

You have come from: <script type="text/javascript">document.write(document.referrer);</script><br>
You are going to: <script type="text/javascript">document.write(window.location.href);</script><br>

<script type="text/javascript">
document.write(document.referrer + "<br>");
document.write(window.location.href + "<br>");
document.write(window.location.hostname + "<br>");
document.write(window.location.pathname + "<br>");
document.write(window.location.protocol + "<br>");
</script>

- window.location.href returns the href (URL) of the current page
- window.location.hostname returns the domain name of the web host
- window.location.pathname returns the path and filename of the current page
- window.location.protocol returns the web protocol used (http: or https:)

