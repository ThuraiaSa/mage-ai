TEMPLATES = """
### word.yaml

word:
  description: 'Tokenize text into individual words using whitespace and punctuation as delimiters.'
  name: 'Whitespace and punctuation word'
  path: transformers/tokenization/word.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for tokenization to ensure proper handling of language-specific nuances.'
      name: 'Text language'
      input: text
      required: true
      types:
        - string
    lower_case:
      description: 'Convert all words to lowercase during tokenization.'
      name: 'Lowercase tokens'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### sentence.yaml

sentence:
  description: 'Segment text into sentences using language-specific punctuation and rules.'
  name: 'Sentence segmenter'
  path: transformers/tokenization/sentence.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for accurate sentence segmentation.'
      name: 'Text language'
      input: text
      required: true
      types:
        - string
    strip_whitespace:
      description: 'Remove leading and trailing whitespace from each sentence.'
      name: 'Strip whitespace'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### character.yaml

character:
  description: 'Tokenize text into individual characters.'
  name: 'Character'
  path: transformers/tokenization/character.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    include_whitespace:
      description: 'Include whitespace as part of the character tokens.'
      name: 'Include whitespace'
      input: text
      required: false
      types:
        - boolean
      value: false  # Default value

### byte_pair_encoding.yaml

byte_pair_encoding:
  description: 'Tokenize text using byte pair encoding to create subword units.'
  name: 'Byte pair encoding'
  path: transformers/tokenization/byte_pair_encoding.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    vocab_size:
      description: 'Size of the vocabulary for byte pair encoding.'
      name: 'Vocabulary size'
      input: text
      required: true
      types:
        - integer
    min_frequency:
      description: 'Minimum frequency of pairs to be merged during tokenization.'
      name: 'Minimum frequency'
      input: text
      required: false
      types:
        - integer
      value: 2  # Default value
    special_tokens:
      description: 'List of special tokens to be included in the tokenization process.'
      name: 'Special tokens'
      input: text
      required: false
      types:
        - list
      value: ["<s>", "</s>", "<unk>", "<pad>"]  # Default value

### subword.yaml

subword:
  description: 'Tokenize text into subword units using a specified subword model.'
  name: 'Subword model'
  path: transformers/tokenization/subword.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    model_path:
      description: 'Path to the pre-trained subword model for tokenization.'
      name: 'Model path'
      input: text
      required: true
      types:
        - string
    max_subwords:
      description: 'Maximum number of subwords per token.'
      name: 'Max subwords'
      input: text
      required: false
      types:
        - integer
      value: 5  # Default value
    handle_oov:
      description: 'Strategy for handling out-of-vocabulary (OOV) tokens.'
      name: 'OOV handling strategy'
      input: text
      required: false
      types:
        - string
      value: "split"  # Default value

### regular_expression.yaml

regular_expression:
  description: 'Tokenize text using custom regular expressions for more flexible tokenization.'
  name: 'Regular expression'
  path: transformers/tokenization/regular_expression.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    pattern:
      description: 'Regular expression pattern for tokenization.'
      name: 'Tokenization pattern'
      input: text
      required: true
      types:
        - string
    flags:
      description: 'Flags for the regular expression to modify its behavior.'
      name: 'Regular expression flags'
      input: text
      required: false
      types:
        - string
      value: "i"  # Default value
    split_on_whitespace:
      description: 'Whether to split tokens on whitespace in addition to the regex pattern.'
      name: 'Split on whitespace'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### named_entity_recognition.yaml

named_entity_recognition:
  description: 'Tokenize text using named entity recognition to identify and separate entities.'
  name: 'Named entity recognition (NER)'
  path: transformers/tokenization/named_entity_recognition.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    model_path:
      description: 'Path to the pre-trained NER model for extracting named entities.'
      name: 'NER model path'
      input: text
      required: true
      types:
        - string
    entity_types:
      description: 'Types of entities to extract (e.g., PERSON, ORG, LOCATION).'
      name: 'Entity types'
      input: text
      required: false
      types:
        - list
      value: ["PERSON", "ORG", "LOCATION"]  # Default value
    include_entity_tags:
      description: 'Include tags for each entity type in the output tokens.'
      name: 'Include entity tags'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### lemmatization.yaml

lemmatization:
  description: 'Tokenize and normalize text by converting words to their base or dictionary form.'
  name: 'Lemmatization'
  path: transformers/tokenization/lemmatization.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for accurate lemmatization.'
      name: 'Text language'
      input: text
      required: true
      types:
        - string
      value: english
    handle_stopwords:
      description: 'Whether to handle stopwords during lemmatization.'
      name: 'Handle stopwords'
      input: text
      required: false
      types:
        - boolean
      value: false  # Default value
    use_pos_tags:
      description: 'Use part-of-speech (POS) tags for better lemmatization accuracy.'
      name: 'Use POS tags'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### stopword.yaml

stopword:
  description: 'Tokenize text and remove stopwords to keep only meaningful words.'
  name: 'Stopword removal'
  path: transformers/tokenization/stopword.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for efficient stopword removal.'
      name: 'Text language'
      input: text
      required: true
      types:
        - string
    custom_stopwords:
      description: 'Custom list of stopwords to remove.'
      name: 'Custom stopwords'
      input: text
      required: false
      types:
        - list
      value: []
    case_sensitive:
      description: 'Perform case sensitive stopword removal.'
      name: 'Case sensitive'
      input: text
      required: false
      types:
        - boolean
      value: false  # Default value

### lemmatization.yaml

lemmatization_spacy:
  description: 'Lemmatize text to reduce words to their base or root form using spaCy.'
  name: 'Lemmatization (spaCy)'
  path: transformers/tokenization/lemmatization_spacy.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for accurate lemmatization.'
      name: 'Language'
      input: text
      required: true
      types:
        - string
      value: "en"
    handle_stopwords:
      description: 'Whether to handle stopwords during lemmatization.'
      name: 'Handle stopwords'
      input: text
      required: false
      types:
        - boolean
      value: false  # Default value
    use_pos_tags:
      description: 'Use part-of-speech (POS) tags for better lemmatization accuracy.'
      name: 'Use POS tags'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### stopword.yaml

stopword_spacy:
  description: 'Tokenize text and remove stopwords to keep only meaningful words using spaCy.'
  name: 'Stopword removal (spaCy)'
  path: transformers/tokenization/stopword_spacy.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for efficient stopword removal.'
      name: 'Language'
      input: text
      required: true
      types:
        - string
      value: "en"  # Default to English
    custom_stopwords:
      description: 'Custom list of stopwords to remove.'
      name: 'Custom stopwords'
      input: text
      required: false
      types:
        - list
      value: []
    case_sensitive:
      description: 'Perform case-sensitive stopword removal.'
      name: 'Case sensitive'
      input: text
      required: false
      types:
        - boolean
      value: false  # Default to case-insensitive

### sentence.yaml

sentence_spacy:
  description: 'Tokenize text into sentences using spaCy.'
  name: 'Sentence tokenization (spaCy)'
  path: transformers/tokenization/sentence_spacy.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for accurate sentence segmentation.'
      name: 'Language'
      input: text
      required: true
      types:
        - string
      value: "en"  # Default to English
    strip_whitespace:
      description: 'Remove leading and trailing whitespace from each sentence.'
      name: 'Strip whitespace'
      input: text
      required: false
      types:
        - boolean
      value: true  # Default value

### part_of_speech.yaml

part_of_speech_spacy:
  description: 'Perform part of speech tagging on text using spaCy.'
  name: 'Part of speech (spaCy)'
  path: transformers/tokenization/part_of_speech_spacy.py
  type: transformer
  inputs:
    text:
      style:
        input_type: null
        multiline: false
        monospace: false
      type: text_field
  variables:
    language:
      description: 'Language of the text for accurate part of speech tagging.'
      name: 'Language'
      input: text
      required: true
      types:
        - string
      value: "en"  # Default to English
"""