from itertools import combinations
import pandas as pd
import numpy as np
import math


def veri_oku(YOL):
    return pd.read_excel(YOL, names=['is', 'agirlik', 'islem_suresi', 'bitme_zamani'], index_col=0).to_dict('index')
