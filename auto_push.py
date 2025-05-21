import os

def autoDeploy(commitMsg):
    print(os.system(f'git add . && git commit -m "{commitMsg}" && git push'))
    
autoDeploy("edit django rest")