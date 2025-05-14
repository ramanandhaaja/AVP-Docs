import CodeBlock from '@theme/CodeBlock';
import TemplateJson from '!!raw-loader!./template.json';

---
title: "Overview"
date: 2021-08-13T00:55:30+10:00
draft: true
---
## About SEQ
SEQ is a log management application used by avp to ingest logs from Asset Valuer Pro and output them to the SEQ UI located
[here](http://avpseq.australiaeast.azurecontainer.io/#/events)

## Deployment Configuration
The code below is the deployment template for SEQ on Azure.

<CodeBlock language="json">{TemplateJson}</CodeBlock>
