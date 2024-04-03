import transformers
import torch
from scipy.spatial.distance import cosine

def theoretical(exam_paper,answer_key):
    tokenizer = transformers.BertTokenizer.from_pretrained('bert-large-uncased')
    model = transformers.BertModel.from_pretrained('bert-large-uncased')

    
    exam_paper_tokens = tokenizer(exam_paper, return_tensors='pt')
    answer_key_tokens = tokenizer(answer_key, return_tensors='pt')

    # Create a dictionary with the input data
    input_data_exam = {
        "input_ids": exam_paper_tokens["input_ids"],
        "attention_mask": exam_paper_tokens["attention_mask"]
    }

    input_data_answer_key = {
        "input_ids": answer_key_tokens["input_ids"],
        "attention_mask": answer_key_tokens["attention_mask"]
    }

    # Pass the input data dictionaries to the BERT model
    exam_paper_embeddings = model(**input_data_exam)[0]
    answer_key_embeddings = model(**input_data_answer_key)[0]

    # Calculate the cosine similarity using scipy
    similarity_score = 1 - cosine(
        exam_paper_embeddings[0].mean(0).detach().numpy(),
        answer_key_embeddings[0].mean(0).detach().numpy()
    )

    print(similarity_score)

    return int(similarity_score*100),100
