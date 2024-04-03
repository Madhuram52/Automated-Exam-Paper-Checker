from typeselection.paracheck import theoretical
from typeselection.mcq import check_mcq
from typeselection.tf import check_tf
from typeselection.oneword import check_oneword

def check_answer(image_type,original, student):

    if image_type == "mcq" :
        return check_mcq(student,original)
    elif image_type == "tf" :
        return check_tf(student,original)
    elif image_type == "oneword" :
        return check_oneword(student,original)
    elif image_type=="para":
        return theoretical(student,original)


