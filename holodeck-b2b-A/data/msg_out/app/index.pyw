import os
i = 10
while i == 10:
    # Absolute path of a file
    old_name = "../test-project/holodeck-b2b-A/data/msg_out/ex-mmd-push.accepted"
    new_name = "../test-project/holodeck-b2b-A/data/msg_out/ex-mmd-push.mmd"

    if len(os.listdir('../test-project\holodeck-b2b-A\data\msg_out\payloads')) == 0:
        print("Directory is empty")
    else:    
        print("File Renamed")
        os.rename(old_name, new_name)
        break
