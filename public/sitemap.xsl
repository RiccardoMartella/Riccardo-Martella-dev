<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Assembly Station</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            font-size: 14px;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
          }
          
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 32px;
            font-weight: 600;
          }
          
          .header p {
            margin: 0;
            opacity: 0.9;
            font-size: 16px;
          }
          
          .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
          }
          
          .stats {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          
          .stat-item {
            text-align: center;
            padding: 10px 20px;
          }
          
          .stat-number {
            font-size: 32px;
            font-weight: 700;
            color: #667eea;
            display: block;
          }
          
          .stat-label {
            font-size: 14px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .url-table {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th {
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          tr {
            border-bottom: 1px solid #eee;
          }
          
          tr:hover {
            background: #f8f9fa;
          }
          
          td {
            padding: 12px 15px;
            font-size: 14px;
          }
          
          .url-cell {
            color: #667eea;
            word-break: break-all;
          }
          
          .url-cell a {
            color: #667eea;
            text-decoration: none;
          }
          
          .url-cell a:hover {
            text-decoration: underline;
          }
          
          .priority-high {
            color: #28a745;
            font-weight: 600;
          }
          
          .priority-medium {
            color: #ffc107;
            font-weight: 600;
          }
          
          .priority-low {
            color: #6c757d;
            font-weight: 600;
          }
          
          .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
          }
          
          .badge-weekly {
            background: #d4edda;
            color: #155724;
          }
          
          .badge-monthly {
            background: #fff3cd;
            color: #856404;
          }
          
          .badge-yearly {
            background: #e2e3e5;
            color: #383d41;
          }
          
          .footer {
            text-align: center;
            padding: 40px 20px;
            color: #666;
            font-size: 14px;
          }
          
          .footer a {
            color: #667eea;
            text-decoration: none;
          }
          
          .footer a:hover {
            text-decoration: underline;
          }
          
          @media (max-width: 768px) {
            .header h1 {
              font-size: 24px;
            }
            
            .stat-number {
              font-size: 24px;
            }
            
            th, td {
              padding: 10px;
              font-size: 12px;
            }
            
            .hide-mobile {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗺️ XML Sitemap</h1>
          <p>Assembly Station - Unity Asset for Interactive 3D Assembly Documentation</p>
        </div>
        
        <div class="container">
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              <span class="stat-label">Total URLs</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">2</span>
              <span class="stat-label">Languages</span>
            </div>
            <div class="stat-item">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority='1.0'])"/></span>
              <span class="stat-label">High Priority</span>
            </div>
          </div>
          
          <div class="url-table">
            <table>
              <thead>
                <tr>
                  <th style="width: 50%">URL</th>
                  <th class="hide-mobile" style="width: 15%">Last Modified</th>
                  <th class="hide-mobile" style="width: 15%">Change Freq</th>
                  <th style="width: 10%">Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url-cell">
                      <a href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td class="hide-mobile">
                      <xsl:choose>
                        <xsl:when test="sitemap:changefreq='weekly'">
                          <span class="badge badge-weekly">Weekly</span>
                        </xsl:when>
                        <xsl:when test="sitemap:changefreq='monthly'">
                          <span class="badge badge-monthly">Monthly</span>
                        </xsl:when>
                        <xsl:when test="sitemap:changefreq='yearly'">
                          <span class="badge badge-yearly">Yearly</span>
                        </xsl:when>
                        <xsl:otherwise>
                          <xsl:value-of select="sitemap:changefreq"/>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.8">
                          <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.5">
                          <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="footer">
          <p>
            Generated for <a href="https://www.assembly-station.com">assembly-station.com</a><br/>
            Last updated: <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/>
          </p>
          <p style="margin-top: 10px; font-size: 12px; color: #999;">
            This is an XML Sitemap for search engines like Google. Learn more at 
            <a href="https://www.sitemaps.org/" target="_blank">sitemaps.org</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
