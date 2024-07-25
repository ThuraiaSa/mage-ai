TEMPLATES = """
### pgvector.py

pgvector:
  description: 'Pgvector is an open-source vector similarity search extension for PostgreSQL. It enables storing vectors and performing fast similarity search directly in Postgres alongside your other relational data.'
  name: 'PGVector'
  path: data_exporters/vector_databases/pgvector.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string

### elasticsearch.py

elasticsearch:
  description: 'Elasticsearch is a distributed, RESTful search and analytics engine. It has native support for vector fields, enabling approximate k-NN search on dense vectors.'
  name: 'Elasticsearch'
  path: data_exporters/vector_databases/elasticsearch.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
    number:
      style:
        input_type: number
        multiline: false
        monospace: true
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string
      value: 'http://localhost:9200'
    index_name:
      description: 'The name of the Elasticsearch index where the documents will be stored.'
      name: 'Index name'
      input: text
      required: true
      types:
        - string
      value: documents
    number_of_shards:
      description: 'The number of primary shards that an index should have.'
      name: 'Number of shards'
      input: number
      required: false
      types:
        - integer
      value: 1
    number_of_replicas:
      description: 'The number of replica shards (copies) that an index should have.'
      name: 'Number of replicas'
      input: number
      required: false
      types:
        - integer
      value: 0
    vector_column_name:
      description: 'The name of the column that contains the vectors.'
      name: 'Vector column name'
      input: text
      required: false
      types:
        - string
      value: embedding
    dimensions:
      description: 'The number of dimensions in the vectors. If empty, it’ll be inferred from the first document’s embeddings.'
      name: 'Dimensions'
      input: number
      required: false
      types:
        - integer

### weaviate.py

weaviate:
  description: 'Weaviate is an open-source vector search engine built to scale seamlessly into billions of data objects. It has a cloud-native architecture and combines vector search with structured filtering, classification, and CRUD operations.'
  name: 'Weaviate'
  path: data_exporters/vector_databases/weaviate.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string


### chroma.py

chroma:
  description: 'Chroma is an open-source embedding database designed to make it easy to build AI applications with embeddings. It provides a simple API to store and retrieve embeddings and documents.'
  name: 'Chroma'
  path: data_exporters/vector_databases/chroma.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string


### qdrant.py

qdrant:
  description: 'Qdrant is a vector similarity search engine that provides a production-ready service with a convenient API to store, search, and manage points (vectors with an additional payload).'
  name: 'Qdrant'
  path: data_exporters/vector_databases/qdrant.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string


### pinecone.py

pinecone:
  description: 'Pinecone is a fully managed vector database that makes it easy to add vector search to production applications. It offers high availability, horizontal scaling, and fast querying over billions of high-dimensional vectors.'
  name: 'Pinecone'
  path: data_exporters/vector_databases/pinecone.py
  type: data_exporter
  inputs:
    text:
      style:
        input_type: null
        multiline: true
        monospace: false
      type: text_field
  variables:
    connection_string:
      description: 'The database connection string.'
      name: 'Connection string'
      input: text
      required: true
      types:
        - string
    environment:
      description: 'The Pinecone environment/region where your index is hosted.'
      name: 'Environment'
      input: text
      required: true
      types:
        - string
"""