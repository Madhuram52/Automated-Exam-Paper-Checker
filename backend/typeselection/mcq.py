def check_mcq(student, original):
    temporiginal = ""
    tempstudent = ""
    for char in original:
        if char.upper() in ['A', 'B', 'C', 'D']:
            temporiginal += char.upper()
    for char in student:
        if char.upper() in ['A', 'B', 'C', 'D']:
            tempstudent += char.upper()
    total = len(temporiginal)
    c = 0
    for i in range(len(temporiginal)):
        if temporiginal[i] == tempstudent[i]:
            c += 1
    return c, total
