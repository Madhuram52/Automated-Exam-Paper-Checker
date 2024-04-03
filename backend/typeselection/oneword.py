def check_oneword(student, original):
    original_words = original.split()
    student_words = student.split()
    non_matching_count = 0
    for i in range(len(original_words)):
        if original_words[i] != student_words[i]:
            non_matching_count += 1

    return len(original_words) - non_matching_count, len(original_words)
