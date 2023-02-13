from django.shortcuts import render,HttpResponse

# Create your views here.
def intel_ru_build(request):
    WORKSPACE="/root/DU-L1_Profiling_Automation/RU_Binary/L3-Daily/L3-Daily_2211_Pre_Intg_100mhz"
    SRC="DU-L1_Src_22.11R_Pre_Intg"
    DU_MAC_ADDRESS="3c:fd:fe:d0:28:18"
    RU_ETH_PORT="enp103s0f0"
    input_profiling="/root/DU-L1_Profiling_Automation/input_profiling"
    script_path="/root/DU-L1_Profiling_Automation/profiling_automation_script/RU_Compilation_script_3CC_1RU"
    reboot="no"
    ru_ip_address = "172.27.186.172"
    ru_password = "root123"
    return HttpResponse("Build Intel Ru Compilation....")