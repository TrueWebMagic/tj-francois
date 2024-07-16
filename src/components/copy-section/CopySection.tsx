import { CTAButton } from "../general/CTAButton";
import { Title } from "../general/Title";

export function CopySection() {

    return (
        <section className="px-6 text-center relative z-10 -mt-64 lg:-mt-72 xl:-mt-48">
            <div className="flex justify-center items-baseline h-fit">
                <svg className="hidden md:block relative top-3" width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.3522 84.2382C69.1669 82.7023 67.0336 81.0813 64.9915 79.3411C62.9439 77.6004 61.0023 75.7367 59.1773 73.7601C57.2339 71.6543 55.446 69.4077 53.8277 67.038C51.64 63.8706 49.8986 60.4106 48.653 56.7563C48.032 54.913 47.5742 53.0169 47.285 51.0902C47.1272 50.0962 47.0538 49.0898 47.0656 48.0822C47.0749 47.0075 47.2602 45.9407 47.614 44.9248C47.8116 44.3673 48.0907 43.8424 48.4421 43.3675C48.8336 42.8343 49.3447 42.4019 49.9331 42.106C50.5473 41.8044 51.2295 41.6743 51.9085 41.7292C52.5347 41.781 53.1434 41.9599 53.6979 42.2553C54.2117 42.5254 54.6845 42.868 55.1021 43.2727C55.4884 43.6518 55.8385 44.0667 56.1478 44.512C56.7282 45.3305 57.2402 46.1966 57.6784 47.1012C58.546 48.8886 59.1702 50.7872 59.5341 52.7459C59.9 54.7122 59.9825 56.7232 59.7789 58.7167C59.5325 61.1998 58.7852 63.6089 57.583 65.7956C57.4147 66.0907 57.2283 66.3751 57.0249 66.647C56.8148 66.9281 56.5821 67.1913 56.329 67.4339C55.8231 67.938 55.2345 68.3498 54.5897 68.651C53.9339 68.954 53.2281 69.1296 52.5093 69.1688C51.8239 69.2047 51.1376 69.1383 50.4727 68.9718C49.2401 68.6481 48.0707 68.1193 47.0125 67.4071C46.4986 67.0752 46.0026 66.7162 45.5264 66.3315C45.29 66.1405 45.0567 65.9465 44.8302 65.7454C44.6015 65.5454 44.3951 65.3471 44.1766 65.1477C42.451 63.5577 40.8314 61.8546 39.3283 60.0492C33.337 52.7942 29.2453 44.1339 27.4241 34.8538C27.3493 34.5078 27.293 34.1575 27.2329 33.8078C27.1755 33.4576 27.1098 33.1088 27.0612 32.7569C26.966 32.0527 26.8618 31.35 26.7976 30.643C26.6412 29.2329 26.5692 27.819 26.5283 26.4228C26.4994 25.3086 26.5386 24.1933 26.6458 23.0832C26.6952 22.6341 26.7455 22.2358 26.8029 21.8841C26.8681 21.5327 26.9345 21.2277 27.0013 20.9644C27.1959 20.1977 27.351 20.2152 27.4508 20.8829C27.4757 21.05 27.4971 21.2577 27.5147 21.5041C27.5298 21.7503 27.5473 22.035 27.5672 22.3584C27.5862 22.6808 27.6017 23.0396 27.6139 23.4348C27.6339 23.8295 27.6576 24.2593 27.6742 24.7228C27.782 27.1654 28.0225 29.5994 28.3946 32.0139C29.2437 37.5308 30.9488 42.8734 33.4473 47.8455C35.9181 52.8062 39.1704 57.3262 43.0781 61.2306C43.3491 61.4953 43.6214 61.7612 43.8948 62.0283C44.1757 62.2868 44.4574 62.5461 44.7399 62.8061C45.0181 63.0702 45.3158 63.3134 45.6033 63.5677C45.8938 63.8202 46.1814 64.0757 46.467 64.3029C47.5589 65.2122 48.7773 65.9555 50.0838 66.5093C51.0634 66.9041 52.0806 67.0639 52.9802 66.8593C53.4324 66.7522 53.8599 66.557 54.2387 66.2847C54.4362 66.1422 54.6214 65.9831 54.7923 65.8091C54.9689 65.638 55.1291 65.4505 55.2709 65.2492C55.4209 65.0387 55.5575 64.8188 55.6798 64.5909L56.059 63.8357C56.1731 63.5762 56.2901 63.3179 56.4005 63.0567C56.4988 62.7902 56.6073 62.5277 56.6984 62.2583C57.0661 61.1771 57.3222 60.0611 57.4624 58.9282C57.7405 56.6455 57.5986 54.3333 57.044 52.1078C56.7659 50.9931 56.3974 49.9039 55.9422 48.8512C55.4976 47.8092 54.9504 46.8154 54.3087 45.8847L54.1271 45.6336L54.036 45.5084L53.9487 45.3982C53.8342 45.2531 53.7117 45.1147 53.5819 44.9835C53.3336 44.731 53.0535 44.5124 52.7486 44.3334C52.4744 44.1708 52.1726 44.0608 51.8582 44.0088C51.7189 43.9855 51.5771 43.9805 51.4363 43.994C51.3035 44.0035 51.1727 44.0324 51.048 44.08C50.9208 44.1247 50.8004 44.1876 50.6908 44.2669C50.5706 44.3504 50.4603 44.4477 50.3623 44.5568C50.1402 44.8112 49.9589 45.099 49.8251 45.4097C49.6736 45.759 49.5576 46.1227 49.4791 46.4953C49.3951 46.8855 49.3396 47.2813 49.3132 47.6794C49.2658 48.5158 49.2945 49.3543 49.399 50.1844C49.4479 50.6107 49.5099 51.0399 49.5812 51.4727C49.6533 51.9016 49.7334 52.3291 49.8217 52.7551C50.1871 54.4639 50.6827 56.1409 51.3041 57.7713C52.4238 60.6965 53.8766 63.4788 55.6333 66.0626C57.4012 68.6621 59.3967 71.0957 61.596 73.3344C62.6947 74.4598 63.8336 75.5456 65.0126 76.5919C65.6033 77.1126 66.1984 77.6279 66.8113 78.1239L67.7274 78.872L68.6592 79.6014C69.2763 80.0929 69.9187 80.5529 70.5485 81.0289C71.1928 81.4862 71.827 81.9573 72.4817 82.4009C73.7769 83.3075 75.1055 84.1692 76.4403 85.0215C80.7143 87.7216 84.8166 90.1856 88.3074 92.6879C89.9132 93.8369 89.5359 94.2654 87.4636 93.3134C84.5479 91.9308 81.5244 90.3981 78.574 88.7396C76.1459 87.3804 73.7389 85.8194 71.395 84.22C71.381 84.2266 71.3679 84.2325 71.3522 84.2382Z" fill="black" />
                    <path d="M78.8296 78.7881C79.5785 80.2804 80.4412 81.7111 81.4101 83.0675C81.6772 83.4207 81.9418 83.7781 82.2156 84.1289C82.5015 84.4707 82.792 84.8091 83.091 85.1378C84.411 86.5375 85.8503 87.8448 87.3215 89.1377L89.547 91.0703C90.2908 91.7148 91.0454 92.3554 91.7755 93.0212L91.7863 93.031C92.0374 93.26 92.1875 93.581 92.2035 93.9231C92.2194 94.2653 92.1 94.6006 91.8713 94.8554C91.7262 95.0154 91.5442 95.1367 91.3416 95.2085C91.139 95.2803 90.9222 95.3004 90.7107 95.2668L87.9693 94.8164C85.0114 94.3475 82.0512 93.8765 79.0882 93.385C76.1255 92.8924 73.1605 92.3804 70.197 91.7868C69.3026 91.595 68.4196 91.3542 67.5517 91.0653C66.7236 90.8046 66.2385 90.4113 65.9829 90.0036C65.6124 89.4069 66.2296 89.0135 67.4272 89.1431C68.2163 89.2346 68.9989 89.3735 69.7711 89.5588C73.326 90.3446 76.9287 90.8985 80.5569 91.2172C81.5606 91.3097 82.6116 91.3685 83.5684 91.5876C86.0489 92.1548 88.5852 92.4691 91.1073 92.8485L90.1558 94.8552C89.7108 94.4644 89.2725 94.0672 88.8474 93.6557C87.164 92.0393 85.3791 90.5027 83.7049 88.8188C82.1893 87.3167 80.792 85.6977 79.5256 83.9764C78.2761 82.2415 77.1797 80.399 76.2489 78.4697C76.0661 78.0867 75.895 77.7046 75.7389 77.3242C75.595 76.9389 75.4679 76.555 75.3575 76.1727C75.1395 75.4342 75.0125 74.6709 74.9792 73.9C74.9658 73.5558 75.0781 73.3472 75.2555 73.2986C75.4286 73.2518 75.6832 73.3572 75.9072 73.6618C76.197 74.1045 76.4642 74.5705 76.7408 75.0333C77.0205 75.4942 77.2873 75.9654 77.5452 76.4379C77.7699 76.8178 77.9727 77.2144 78.1697 77.6164L78.3169 77.9183L78.4742 78.2134C78.5803 78.4094 78.6862 78.6052 78.7919 78.8008L78.8296 78.7881Z" fill="black" />
                </svg>
                <Title>Unique Ad Creatives on a Biweekly Basis</Title>
                <svg className="hidden md:block relative top-3" width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.7004 84.2382C47.8857 82.7023 50.019 81.0813 52.0611 79.3411C54.1088 77.6004 56.0503 75.7367 57.8753 73.7601C59.8187 71.6543 61.6066 69.4077 63.2249 67.038C65.4126 63.8706 67.154 60.4106 68.3996 56.7563C69.0206 54.913 69.4784 53.0169 69.7676 51.0902C69.9254 50.0962 69.9988 49.0898 69.987 48.0822C69.9777 47.0075 69.7924 45.9407 69.4386 44.9248C69.2411 44.3673 68.9619 43.8424 68.6105 43.3675C68.219 42.8343 67.7079 42.4019 67.1195 42.106C66.5053 41.8044 65.8231 41.6743 65.1441 41.7292C64.5179 41.781 63.9092 41.9599 63.3547 42.2553C62.8409 42.5254 62.3681 42.868 61.9505 43.2727C61.5643 43.6518 61.2142 44.0667 60.9048 44.512C60.3244 45.3305 59.8124 46.1966 59.3742 47.1012C58.5066 48.8886 57.8825 50.7872 57.5185 52.7459C57.1526 54.7122 57.0701 56.7232 57.2737 58.7167C57.5201 61.1998 58.2674 63.6089 59.4696 65.7956C59.6379 66.0907 59.8243 66.3751 60.0277 66.647C60.2378 66.9281 60.4705 67.1913 60.7236 67.4339C61.2295 67.938 61.8181 68.3498 62.4629 68.651C63.1187 68.954 63.8245 69.1296 64.5434 69.1688C65.2287 69.2047 65.915 69.1383 66.5799 68.9718C67.8126 68.6481 68.9819 68.1193 70.0401 67.4071C70.554 67.0752 71.05 66.7162 71.5262 66.3315C71.7626 66.1405 71.9959 65.9465 72.2224 65.7454C72.4511 65.5454 72.6575 65.3471 72.876 65.1477C74.6016 63.5577 76.2212 61.8546 77.7243 60.0492C83.7156 52.7942 87.8073 44.1339 89.6285 34.8538C89.7033 34.5078 89.7596 34.1575 89.8197 33.8078C89.8771 33.4576 89.9428 33.1088 89.9914 32.7569C90.0866 32.0527 90.1908 31.35 90.255 30.643C90.4114 29.2329 90.4834 27.819 90.5243 26.4228C90.5532 25.3086 90.514 24.1933 90.4069 23.0832C90.3575 22.6341 90.3071 22.2358 90.2497 21.8841C90.1845 21.5327 90.1181 21.2277 90.0513 20.9644C89.8567 20.1977 89.7016 20.2152 89.6018 20.8829C89.5769 21.05 89.5555 21.2577 89.5379 21.5041C89.5228 21.7503 89.5053 22.035 89.4854 22.3584C89.4664 22.6808 89.4509 23.0396 89.4387 23.4348C89.4187 23.8295 89.395 24.2593 89.3784 24.7228C89.2706 27.1654 89.0301 29.5994 88.658 32.0139C87.8089 37.5308 86.1038 42.8734 83.6053 47.8455C81.1345 52.8062 77.8822 57.3262 73.9745 61.2306C73.7035 61.4953 73.4312 61.7612 73.1578 62.0283C72.8769 62.2868 72.5952 62.5461 72.3128 62.8061C72.0345 63.0702 71.7368 63.3134 71.4493 63.5677C71.1588 63.8202 70.8712 64.0757 70.5856 64.3029C69.4937 65.2122 68.2753 65.9555 66.9688 66.5093C65.9892 66.9041 64.972 67.0639 64.0724 66.8593C63.6202 66.7522 63.1927 66.557 62.8139 66.2847C62.6164 66.1422 62.4312 65.9831 62.2603 65.8091C62.0837 65.638 61.9235 65.4505 61.7817 65.2492C61.6317 65.0387 61.4951 64.8188 61.3728 64.5909L60.9936 63.8357C60.8795 63.5762 60.7626 63.3179 60.6521 63.0567C60.5538 62.7902 60.4454 62.5277 60.3542 62.2583C59.9865 61.1771 59.7304 60.0611 59.5902 58.9282C59.3121 56.6455 59.454 54.3333 60.0086 52.1078C60.2867 50.9931 60.6552 49.9039 61.1104 48.8512C61.555 47.8092 62.1023 46.8154 62.7439 45.8847L62.9255 45.6336L63.0167 45.5084L63.1039 45.3982C63.2184 45.2531 63.3409 45.1147 63.4707 44.9835C63.719 44.731 63.9991 44.5124 64.304 44.3334C64.5782 44.1708 64.8801 44.0608 65.1945 44.0088C65.3338 43.9855 65.4756 43.9805 65.6163 43.994C65.7491 44.0035 65.8799 44.0324 66.0046 44.08C66.1318 44.1247 66.2522 44.1876 66.3618 44.2669C66.482 44.3504 66.5923 44.4477 66.6903 44.5568C66.9124 44.8112 67.0937 45.099 67.2275 45.4097C67.3791 45.759 67.495 46.1227 67.5735 46.4953C67.6575 46.8855 67.713 47.2813 67.7394 47.6794C67.7868 48.5158 67.7581 49.3543 67.6536 50.1844C67.6047 50.6107 67.5427 51.0399 67.4714 51.4727C67.3993 51.9016 67.3192 52.3291 67.2309 52.7551C66.8655 54.4639 66.3699 56.1409 65.7485 57.7713C64.6288 60.6965 63.176 63.4788 61.4193 66.0626C59.6514 68.6621 57.6559 71.0957 55.4567 73.3344C54.3579 74.4598 53.219 75.5456 52.04 76.5919C51.4494 77.1126 50.8542 77.6279 50.2413 78.1239L49.3252 78.872L48.3935 79.6014C47.7763 80.0929 47.1339 80.5529 46.5041 81.0289C45.8598 81.4862 45.2257 81.9573 44.5709 82.4009C43.2757 83.3075 41.9472 84.1692 40.6123 85.0215C36.3383 87.7216 32.236 90.1856 28.7452 92.6879C27.1394 93.8369 27.5167 94.2654 29.589 93.3134C32.5047 91.9308 35.5282 90.3981 38.4786 88.7396C40.9067 87.3804 43.3137 85.8194 45.6576 84.22C45.6717 84.2266 45.6847 84.2325 45.7004 84.2382Z" fill="black" />
                    <path d="M38.2231 78.7881C37.4741 80.2804 36.6114 81.7111 35.6425 83.0675C35.3754 83.4207 35.1108 83.7781 34.837 84.1289C34.5511 84.4707 34.2606 84.8091 33.9616 85.1378C32.6416 86.5375 31.2023 87.8448 29.7311 89.1377L27.5056 91.0703C26.7619 91.7148 26.0073 92.3554 25.2771 93.0212L25.2664 93.031C25.0152 93.26 24.8651 93.581 24.8491 93.9231C24.8332 94.2653 24.9527 94.6006 25.1813 94.8554C25.3264 95.0154 25.5084 95.1367 25.711 95.2085C25.9136 95.2803 26.1304 95.3004 26.3419 95.2668L29.0833 94.8164C32.0412 94.3475 35.0014 93.8765 37.9644 93.385C40.9271 92.8924 43.8921 92.3804 46.8556 91.7868C47.75 91.595 48.6331 91.3542 49.5009 91.0653C50.329 90.8046 50.8141 90.4113 51.0698 90.0036C51.4402 89.4069 50.823 89.0135 49.6254 89.1431C48.8364 89.2346 48.0537 89.3735 47.2815 89.5588C43.7266 90.3446 40.1239 90.8985 36.4957 91.2172C35.492 91.3097 34.4411 91.3685 33.4842 91.5876C31.0037 92.1548 28.4674 92.4691 25.9453 92.8485L26.8968 94.8552C27.3418 94.4644 27.7801 94.0672 28.2052 93.6557C29.8886 92.0393 31.6735 90.5027 33.3477 88.8188C34.8633 87.3167 36.2606 85.6977 37.527 83.9764C38.7766 82.2415 39.8729 80.399 40.8037 78.4697C40.9866 78.0867 41.1577 77.7046 41.3137 77.3242C41.4576 76.9389 41.5847 76.555 41.6952 76.1727C41.9131 75.4342 42.0401 74.6709 42.0734 73.9C42.0868 73.5558 41.9745 73.3472 41.7971 73.2986C41.6241 73.2518 41.3694 73.3572 41.1455 73.6618C40.8556 74.1045 40.5884 74.5705 40.3118 75.0333C40.0321 75.4942 39.7653 75.9654 39.5074 76.4379C39.2827 76.8178 39.0799 77.2144 38.883 77.6164L38.7357 77.9183L38.5784 78.2134C38.4723 78.4094 38.3664 78.6052 38.2607 78.8008L38.2231 78.7881Z" fill="black" />
                </svg>
            </div>
            <p className="mt-6 max-w-[630px] mx-auto">
                Vital Socials partners with top eCommerce brands to craft captivating creatives that stop the scroll.
                We cherish the collaboration with our esteemed team of creators, who bring their passion and expertise to every project.
            </p>
            <div className="mt-[15px]">
                <CTAButton>Contact Us</CTAButton>
            </div>
        </section>
    )
}