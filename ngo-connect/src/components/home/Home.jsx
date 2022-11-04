import './Home.css'

export default function Home() {
    return(
    <>
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

{/* <!-- page Navigation --> */}
<nav class="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="assets/imgs/logo.svg" alt=""/>
        </a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#service">Our Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Domain</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#blog">Opportunities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                <li class="nav-item">
                   <a href ="forngo.html" class="btn btn-primary btn-sm rounded dropbtn">Connect As</a>

                </li>
            </ul>
        </div>
    </div>
</nav>
{/* <!-- End Of Second Navigation --> */}

{/* <!-- Page Header --> */}
<header class="header">
    <div class="overlay">
        <h1 class="subtitle">We rise by lifting others</h1>
        <h1 class="title">NGO CONNECT</h1>
    </div>
    <div class="shape">
        <svg viewBox="0 0 1500 200">
            <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
        </svg>
    </div>
    <div class="mouse-icon"><div class="wheel"> </div></div>
</header>
{/* <!-- End Of Page Header --> */}

{/* <!-- Service Section --> */}
<section  id="service" class="section pt-0">
    <div class="container">
        <h6 class="section-title text-center">Our Service</h6>
        <h6 class="section-subtitle text-center mb-5 pb-3"></h6>

        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                        <small class="text-primary font-weight-bold">01</small>
                        <h5 class="card-title mt-3"> For Ngo</h5>
                        <p class="mb-0">For not having the headache of maintaining your own website create your own website at our platform!
                            Your NGO can connect with other NGOs and share your requirements for help!</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                        <small class="text-primary font-weight-bold">02</small>
                        <h5 class="card-title mt-3">For Volunteers</h5>
                        <p class="mb-0">Volunteers can do different opportunities to volunteer according to their suitable preference.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                        <small class="text-primary font-weight-bold">03</small>
                        <h5 class="card-title mt-3">For Corporates</h5>
                        <p class="mb-0">They can attend online volunteering events through our website!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End OF Service Section --> */}

{/* <!-- About Section --> */}
<section class="section" id="about">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-md-6 pr-md-5 mb-4 mb-md-0">
                <h6 class="section-title mb-0">About Company</h6>

                <p >ConnectNGO is a non-profit organisation that seeks to contribute to the developmental sector by facilitating engagement of the volunteering community, building capacity, and creating value added services for NGOs.</p>
                <img src="data:image/png;base64,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"/>
            </div>
            <div class="col-md-6 pl-md-5">
                <div class="row">
                    <div class="col-6">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhAQERAQFRUWGBUVGBUVFhUWFhURFxYYGBgYGRcYHSggGRolGxYWIzEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGCsmHyUtLS8xLS0tLS0tLS0rLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLSstLf/AABEIANIA8AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAEIQAAEEAAQDBQUFBgQFBQAAAAEAAgMRBAUSITFBUQYTImFxMoGRobEjQlJywQcUYoLR8EOSsuEkM1PC8RUWZHOi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAA1EQACAQIDBQYEBgMBAQAAAAAAAQIDEQQhMQUSQVFhInGBkaGxE8HR8AYUIzJSokLh8XJi/9oADAMBAAIRAxEAPwDeIS0ilBREQlpFIBEJaRSARCWkUgEQlpFIBEJaRSARCWkUgEQlpFIBEJaRSARCWkUgEQlpFIBEJaRSARCWkUgEQlpFIBE+Pi31H1TaToxuPUfVCR1JKUlIpSSR0lpPpFICOkUpKSUgOPH4wQtDjuSaA6mifoCqr/1x34Gj1P8A5WX/AGt5y/Dy4BsZ3aXykciNmAHyIL1NlOYsxEbZYzseI5sdzYfNQzh7XrYmi4yhK0GuS1z4658DT4TObcGvbsTV7ir8irqlkcK23tHU0tjShGzY+JrV4S+I72as/f5eZHSWk+lDNiGM9p4A9d/hxUnWk1FXk7Lrl7jqRSbhsS2QEsNgGun1U1IIyjNb0XdcxlJKUlIpSZDKSUpKRSAZSSlJSKQEdIpSUikAyklKSkUgI6RSkpFIBlJKUlIpAR0ljG49R9U+ksY3HqEAUilJSSlBlYZSjxWIbE0yPNNFAn1IA+ZCnpZT9qcjmZZii0kG4RY5fbR7/wB9UG7fItjnsP4j/lKQ59D1d/fvWJyfGieGKYfeYCfJ/B49zgV2IeUltnFxbTUb9z+odvsuhzJkeh5bLGTpeWkjQ6tTSAfIEeY8yq3s5kjcGxzA97y4hzrFCwK2Zy+JVohCpidpYivHcm8uSX/X6j2uqiOI+qshnUtVq9/htVYTgoKtLEVaN/hyavyZ1SZhI/2pL9OHwXMhChmqpOVR3m231bfuXvZl3/MH5T9f9ldUqLs27xvb1A+IWgpSj2Wx3fBxXK69W/mMpFJ9IpSdOwykUn0ikFhlIpPpFILDKRSfSKQWGUik+kUgsMpFJ9IpBYZSKT6QUDy1GUnRjceoUUWLY9zmskjc4C9LXAkDzrguhg3HqETT0JcWnmhaRSkpNmeGtc48Ggk+gFlSSNpcec5a3FQT4d3CVjmX0LhQd6g0fcqg9qze0Ir82/0XRD2oY72o3N9+r6gKChDamEk8qnmmvVpI8r7ASua3E4WQEPhlNjoTs4e50Z+K1ahmwMYxmLxcZps3dnRQtrmjxnY8zv8AFTBSeW2jKnLEzlTd0/eyv6iucALJAHU7BNGIZV95HV1epta/w31RO6mPJ2Gl3H8qoMPEYJ2Rt3imdG9vRr2vafo34FvRYmOHwyrQk79pK6XNLOVnzSz62enHQyYhrdnSMbz8TgNuvonvlaACXMAPAkijfBZ7LcR3Axb5QS8SanDbW+PgNGr2m3aVprEYJ+ksi7lojDtmseWvph/C6tCG+ezt2Uk27JN3ytJqG/aPfwed12uhoYnhwtpBHVpsWnqiykOdi8U9pHdGxf3TOCzh1Ip9+qvEKOKoKjPdTvlF910nZ9Ve300XTgMR3b2v6Hf6fRXuLz1gH2YLz1qq/UrNoSxsw+0K+GpunTeuema7uHmn5lpBnMocC59i920P6LTjfdYRbfLnXFG7qPoaURO3sLF1Ksp06km8k1dt9Hm/AkpFKSkUsz0RHSKUlIpAR0ilJSKQEdIpSUikBHSKUlIpAVWcw4hzP+HljYQNw5oPwebDfeD6heW47MZpSRLM91ci417gNq9Fre2/aP2sLCfKRw+bB+vw6qm7L9mnYtxe4uZENiRVud+Ft7XzJ/qubiP1Km7C79vtcT2GyYLCYV4jEKKWqe6t63fq97gtbZ6PKw/Zr/zZ/wAn/cxegMG49Qs32Y7OPwc0h1NfG5hDSNjeppAc3kaHKwtQwbj1Ct4aLjTs+pw9sVoV8XKpTldNRz8F98x1Ks7UkjBY4tBLhh5yAOJd3Tqr3q2pIW3sQCOh5hbzm2PGuzGbDEwtcT420x4/iHP0dxVssl2iyWXJsa4RX3MluiJstdFe8bv4mk114HmriDOQ5t6CD0vZTY8dj9nyo1HuftenTp9+5ahOBWH7QZpiGhsrdbG6qa4AhhcOV8D6LWZVjRPDHMNtTASOjuDh7iCoK1fBVKVONSWj9DsQktLaFJoVOTLTX4pjfaewepCgjdvojoSqOKQOFtII6g2E8KDFqzFXHjsUWuAaaXatL2fginiLHxteWnmASNR68QiyZc2fhliK3w72ydr9P9XfgZ3I4X4h4Zt5n0W+jjDWta3gKr0CZhMDHCCI2ab41/uuilNj1uztnrCpt2cny0twS9/TgMpFJ9IpSdGwykUn0ikFhlIpPpFILDKRSfSKQWGUsr207RjDt7mI/bOHEfcYefk7p049Lsu1OetwUfIyOsMaf9TurR8zsvNspy6bHznc2TqkkduA0nc31+vkOFTEVmuxDVnc2Ts6E1+ZxGVOOeejtxf/AMr+z7OeaJezWRPxsnMMFOe/y6DqT8l6thMK2JjY42hrWigByH6nzSZZl8eHjbFGKa34udzcTzJUWa5gyFpb32GjkcPB3zw1t8LIuyB0HHhY4rZQoKkuv3kVtp7RnjanKC0XzfV+mnMm/eWd53Osa9OvTz0XV/Eqdg3HqvPhhc59n94wkxHiDXgNd+eNzWNsb8Q7nRrgtb2Wmxbov+OiZHI12m2OadbdvEQ2w348uA4Lec5xLmkUnUikBwZvlEOLjMM8Ye27F7FruTmkbtPmFS5d2FwkJunyVwbI4EfBoF+9aWeQMaXUT5BVMPaSIv0PDmHkTu34jgiQeF+Kt5wvbpc682ymLFYeTCyNHdvaWUAPD+FzRyLTRHmAvF+xLXRwzQP9qGeWNw/iG5+ZK92FHcbjqvG5mCLM83hG32rJvfKwPPzKI5W2Yb2Fb5NP5fM77Raj1I1KTx1jswuUy4olsWnYWbdXHy4lcubfs6xjmEskhc78GpwJ8gS2r9SF15VinxysdF7VgAdbNUfJelPlaDRc0HoTRUXPSbHo0alNuSe9F68M9P8Ah4J+z7WP3trwRpkaC08WvGoOFcjsB7lsVlssnezGZkSw6JMRM4X4T/zHUR1BBC0TJr5KLHI2tTaxU5cMvZI6FedlJ9MxZyfY+ANfL6rP956/BXnZTD95Nq2IYCfDvvwo+e5+CxNeyqdSeKg6SvZ58kuN3wyuu82VIpOpFLM96NpFJ1IpANpFJ1IpANpFJ1IpANpV+eZrHhInSyejW83P5NH9eQXXjsWyCN8srtLGiyf0A5knYBeR5xmUuZ4hoAJs6I4hvTD+p4k+XRV69b4ay1eh1NmbOeKneeUI6vTrZP3fBX42vF9vmWJ6vcf5WMB//LGj+zz9UyHJ48JEImbni9/N7+p8ug5BQ9l+zzMHHWxldRkf1PNo/hHz4qftBnLMHE6VzXPcA4tjZZc/SLPDg0cS7gAscPQ3O1L9z+/PmbNqbQWIapUsqcdFpe3G3JcF466dMuMjZJFE57Q+TVoaTu4NFuoeS88wOPwmM73A5pCyLFNe4GU+AucXbFsh3aaqgfCQG1Y2HTFleGzyHvxiAMW0A62NdG+Pm1r4zI62g8HNI5kG7vv7NZbiJzJFmmFws3cHQyeRjXvfsCALb4mgEeLY8iCbItHJtYf2QyAxxYjCyyd9AyZpgeDXhAa5wBHAaraQDR8Y4EhbFo3CRrAAAAABsANgB0ATmjcIQPpFJ1IpCRjm2KXn/a/BaHlzfVeh0sv2qaCHXyWUXZlrCyanYz/ZvtI+EhjvFH05t82/0XB2tymQ5lLiYWPe2aCAgsDiCRbTwHGmN+Kr4BuVpsj7Xvjiazug9ovSdRB0gkee21+9TOyK221QhRvUluqTtkm+vC/LkZ+PIMa7hBN79TfrS7sP2SxjuMJHm57P62thhu2ER9tj2+niH6Lvh7Q4Z3+MPeHfqKWG8edp4bZ89K39ox9GkzEZ0wZPC3ESva6V7mxRtF7Fx8brr7jNR4cdKhr1UX7asv8A32PBuw5Ejo3yNLWkbMka06jZ2AMYH8yXCtLWRhxtwYwE9XAC/moObtuhQpqnGk1/ldXu7vdzfl6ZEh34pk2IYNQj2LLB0nfa06SYMBcTXiLfIWDuen+6zuYEukb3WrvHGg1osuJ5VzWVON9Tt/hPZcZRliaiTT7MVZPRpt9OS0evQ5Z3yyyBlvO/qvYOyeUfukDQ+g91F18ujf76rP5Vk7MCzvJ3MOLcPCwbiInnz3Avc7bbKszGSnAyEv3vxku+Z4LN9rTQ9ZUTrLcg7R9+7oen0ilkslxHcuj0F3dycWEk6SKur9QfiOla+lrOdODixtIpOpFIYjaRS877aZviBjdOGdKDDGNWgE8TqJcKILaLeIIFLryL9oLXUzFNLHf9RoOg+reI9RfuVf8AMw33F5ex03sjEujGtBb10nZfuV9MuN149OJuaTZHBoLnEAAEknYADiSeiTDTslaHxva9p4OaQQfeF5z2+7T96ThIHWwGpCPvuH3QebQfn5DfOrWjTjvMr4LBVMXV+FHxfJfXktfC7Vd2u7Qux0oiiDu6DqYADb3HYOI6m6A6HqVtuxvZkYOPW8AzPG546B+Fv6nn6BcfYXsp3DRiJm/bEeEH/DB5no+vgNuq1uKm7tjn6XuoXpYLc48gB1PwWmhRd/i1NX6ffoX9o46Ch+Uw2VNav+T7+Kvq/wDJ6dm130vOsX2izHDTOdiMAydjJHCN0RqRgcCQPDer7M/hANHfbarHaXE4vEwyYeTENxLJHB+AfIyKExt+63VWt/IhwLrsigAtXkWa4nGTkvwRwskJ0SvedbXRuAd3bdgdfsuB3ABJ3sA2zi2KfJsnw2YzR5hg24rCaXnvqqMSGt2sLTsSa1EbVe2peigJI4w0U0ADc0BW5Nk+pJJ96egEpDRwTqQ0cEIHoQhDIFk+1A2kA5/0WsWM7STbPPWypRvw/wC8wb36Gyvs+Frj60CV0YDD92yKMfdYxnwACq89xYjgsmgZImn8okaXfIFXrAkjzv4uq/qUodJPza+S9RzU4KF+JY3Z0kbfV4H1U4WB41jgnJoTghrEcFF+9DDEztMUTgN36YwaPmAjF4xkQaZHhoc7QCetE+7hxVNjMRIxzZZQx8EjdB7q3NZq3/LIw/iPteXskX8FSquXYbV9LNxc2v8AGL0b6eV20nYNzZ0rtZkYSR3gNgkg7Bxrh81HjMa5+/duP5Rq+a5YMs0l+l7u5eNQZRuzx47tbp/m/wAq0QwDWRB/FxuzzrewsoSknZHrtj47EzrulRmpxybc95uKyVldt73DdzjxvmzvyDMomhkmIOgiqbRc4jlYHsjnS2mXZnFiATE8OriNwR6g7rzjBYFkoJ0g71/ECrHIMO+ORjmE+F+m+ouiD1sI8j0ValFt52Z6GmvIAJOwG59E5UnbTHdxg53A0XN7sesnh+QJPuUSlupy5FSlSdWpGnHWTS88ii/Z+0zz43HO++9zGnmNR1ke4d2PcrrO+yOGxdksEbz/AIkYa0k/xDg73i/NP7GYHuMHh2kUXASO63INQB9AWj3K7WmlTTpJSXXxZdxmKksZOpRk0l2Vb+Mcl4ZHlWP7MY/Atk7iR743AhxjLr0kUbZxuuYsDqFadgeydacZiG7mjGwjh0kcP9I9/RegpksgaC43QBJoFx26Abk+Q3WMcLCMr8FwN1XbFepRdNpJvWSVm1yftfllxHhYNssmbwmfBZjNBMwm4LDWMNnS17WjVuB7ZLgTe3IcA7YT4vEMGElfHIyXScDKxkffQiy4mV+4koG27EXsDVmPs/kzMbisTN3WLy7FQvb3jYZGljjJZvxMI302QPCbB3tWTkD8DkLs1jkbj2GLG4aVkbp2ANe9lNeNWnwuOk7HlbSOJC9Cw0AjY1jdRDQAC5znuNc3OcSXHzJsowuGEYIFkk25zjbnuoDU48zQA8gABQACmQAEoSJ4QCoCEBCQQhCAjxD9LXHoPnyWB7QOLgQttmrqZ6n+qxmZM2KItYbLMwPaDLnYiB0ba1AtcATV0d/kSkwOGk0hkuIexoFWS5424Dj+i7MZYcb+HFcmPL2e0x4/M1zR81kRicFQxNSPxdeCus/DXysVHaHLWhpMc7nu6FtAjyN8Vd9gsS6TCAOJPdvdGL/DTSB7rpZ2aVaTsLhu7wjCdtRfJ/KeB/ygFRLQ89+JaFKjhoqCt2ur0T595olx5tjzA0OEb3AuDS4Ntsd/ed4mk+i48wzaxoia9zqDwdLtEsYcHSCJ/wB46Q72fdyXPhmslkZJhneFx0TwE7CNwJcXR/LoeXO9Z5mhg2l8Wsmo59L2XF57t7Pdk4uO9FxeSYsWYmRvdTwSPc4kxPbFcMv4Ku+I42PCHbrvwWUxxEub3gBr7Nz7YH9dN6XOvnyrZdOX4BkDS1hfRcXbuJq+TegU5CGGIxS7UKN1B6rRPO67PC2WV3xs0m4kEoUjcwqMsfe3AgE2NySAEOauaWNZJ2dzPZm0J4KsqsO5rg1y6dHwefRy5PLRd4yGnY1YNcwDyW37OzYdxa1sjNQ9mMA3tzsjxO8hw+nnnc+q68qYRLGRx1Nr1sUolNs9DV/EtStNfppK/Nt+y9j11Yzt4e/mwOBH+I8PfvwZ7Or4d4f5Vs3LHZUP3nNcXNxbhmCJv5zbfqJfitddXSjzdvm/RHrdn/p1JVv4Rb8X2Y+rv4GwArYcP0SoQtxz1kCxvazNsyw2ID8NDDLh+7stcQHamWZCDYI2Ldt9mk1xR2zzXMMJLHiYoWS4RgPeMaSZDfF79vCByrUBuXcqd/7lhzGGIYQtfKXtPdOoSQloJ71w5NY7SS7cOHhFlwCAzeJkhzx5hdgsThcaxod3unwsAOxlJ0uLb4Ai+h4r0jK8vbh4xGHPedtUkh1SSOAA1PceJoAeQAA2CngioAu0l5DQ5wbp1EXyskCyaFmrUqEDaRSchCRqcEIQgEBCAhIIQhAc2Yx6o3VxG/w/2tZTHs8JI4raLJ4+Ki9nQke7khvovgYGQD95EfPRJJ/lc1v1f8l3uYCCCGuB5O8TSqmY1mbm/wDxb+Mzb/RWkkmnk8no32q6ozxH4glKptBrkopdMr+Gb1OKbJIXGzH7m6q+A/0rgkzbVbBBqibbJIO5LphG3YO06tOjh4fuqTFzB75Yp3Pish0MpcWNDKAaN9tV3x/L0U+By0uEUkpIkYXDUxxDpGNcQ3W7i4EUf7KxeZjKUvhqeLnKWXZ3ru28nZxd3dXVpNbsoSS1SkR5NhyJA+E6oHB9d6Hh7HuItsXKqA8Xl8bxVuYZq2Hw3HY5FzW6enhVLP2x0bmNhHVp/XdTbIq18NicZP4qpvo3a7XNu0bt8XZXeeru9clVXkOdx4xjnMa5paQHNPIkWN+YVooObUpypycJqzQi5cxxQiA2BJ3H5eq6lVZhmGiZrQ2yGM5A8XHr6oldnR2PgFjsT8Ju3Zb8rL5jcNmIds5pHmNx/VbPsrkjnPbO4ERtNi9i4jy6Xv7k7sjkYlrEywtaPujm49SOFfVbYJZM9DR2DGjX3pyvZ3SV9Vzv7K/eQY7E91HLKf8ADY55/lBP6LP/ALPMKWYUyv8Abme+UnyvSPdsT/Mndv53DCiJntzyMjb6XqPuNAfzK+wmHbDHHG3YRsawejRV/Ja7Xq9y9WepXYwnWcvSC+svHdJXuABJIAAsk7AAcSTyCw3ajN48eBhsDmkMczXtc1m7RLI021veHbiAQBdkb2rDtTmUsuHkOCZK6SJ8Uul0MgbNGx4c4MLgBKNgfCbIG3EXmsdjMvzyJwIMOPa06WgfaF44NsD7Vl9aLePhW4pFjlHbHES97l+Iw8sWP0OEZa3wOdpOl7uIY0GiXbtIG3ENWtyjJYcN3ro4o2PlIfIWCgX190cm3ZA8yeJKnwGGLWRGSnSiNkb5OZIHi36F1ldRQAEqQJUIBCEiAClCRKEAICEBCQQhCAFn+0EdPDvxD5jb+i0CrM/juMHofqP9ghspO0jyPHsrNL64R3ylCkzDCy94yeFzNQaGOZISGOj1auI4H+/zd+fYEd46YOOrSGfygk8fU/ILMy5qYzR733H+rgptc8/tLZuNqYyVelC6atnuu6tZ5Xv6XWpo4IjetxokNGlri5jdN7i2ttxvjp5NUwWci7QN5ulHq1h+hXY3PWVY1ud+Vob/ADEFRY4ktiY9yyov25LV5ebK/tVhhqc7q0O+JLf+1ZGTjQHlXW1pcfiDKHuJsuFeV9B5KmhiDnRvLi0NOrYG7BBHDzWUclmfQaVOphsHCm+1KEUsr52Vu9/60Nv2WycYSAMPtuOt56PI4egGytwqPC52CN5IT73ArpZnLCaD4yegJWFmfNauBx1SblKlNtvPsy+hZrpyjJmYmePUwHwss3VNB33G/wD5VczEE1s2uG1nf0NJ0fah2FbKyJrTK7wCQbtazeiAfvHbjsK5rXOcaavJno/wrsjHfm5S+E12Ws045tx558HonyWZ6wxgaA0AAAUAOAATl5BhcbmOCrElsuiQ6j3gc5hJ5uBNgnrsT1WxyHt7BPTJvsHnayfsyfJ33f5tvMrCGJjJ2lk+p7LEbIrU479Nqcecc9NcvvrYlzJv7xmmFivw4eMzu6a3EBo9QREfeVbdpsHJPhMTDCakfG9rTdeIjhfK+F+aq+x7RLJjsb/1ZdDP/qjGxHqC0fyrTrOlmnLm7/JehWxvZlGl/CKXi+1L+0mvAxHZvtyZD+7Y7DYmLEDwkNhle2Q8LpjSWH18PQ9NRk0EkcTRM4uktxJNagwvJYxzh7TmsLWl1my0nmu8lItpTFSFCEIGpQUlJQgHIQhACEIQAgJEoQkEIQgBVefyUxo6kn4D/dWizmfz2+vwivfxKG2irzMjnW4NUsHj22TY/RbTOHnejXlyWRxbS4+z8N1kjpJWRWiK+q744KChawdd+nBTYMajvf1SxlGIs8enTttxPqmMwGl9jg4X7+a7McwgC+HI/VdmBaHMbfI/IqUZWKWfA6XOobEWEZbhtw48B9FpMbEwNNnlQ6k+SiynJXylgohpNaRxd/T1WmpW3ezFXly+vIsUqKkt+b3Y8+f/AJ5v2WvImwsU2MeIcOwnhbuGw21F3Ju/qfkvQOzXYqHC6XyVLMNwSLa0/wAAPP8AiO/SladncmZhIgxrQHGi4jr0vn6q1WqFHPenm/RdyKGK2i3F0aHZh6y6t/Lwd1YRwuwdweIPMLJZ/wBg4J7fD9i/oB9m4+bfu/y/ArXIW2cIzVpIpYfE1cPLepSs/TxXHxK/s/l37th4Ydra3xEcDJep9eWolWCRFrKKSVkaqk3OTlLVu/mCVCFJiCEIQCISpCgFtCjTwhAISoQAgIQEJBCEIBsj9ILjwAJ+Cw+Z4i7N78fetTnk2mMj8Rr3Dc/osNmcvFC7hY8SizPE3dqnDbN38V3Yw2udjOmyyZeSIJgCKcP79QpsoyrVqLXuaQCRvY96Rw36K9y2Ad27lwF0oeg4lBLL3jSwinA8PNTZeXDYNvy5et9F1YnL9TgeHRytOzWSSOlEem7F6xwDeZPQrFttZZdfp9Wb7wgnKXlw8fp59VyvJHyvGxe/n+Fo8+QHmV6JkuTMw7RwL+bul8m9B9V3YTDNiYGMFAfM9T5qZRGKirI5GJxk67z0+/BLokCEIWRUBBQkQAgBCVCLCISpLQkVCAhACChCASkqCkQgVCbacgBK1NKVqAVCEISVGf8A3fQrK42MV7I+ASoQv0P2/fUopoW/hb8Ao4oW/hb8AhCFoaYW/hb8Ar/BQt7v2W8eg6IQoeg4D2RNv2W8egWm7JRgNloAcOAHmhCcSviP2eRdoQhSc4EIQgBCEIATkiEAwpUIQgcEIQgECEIQkVNQhCAKUIQgAoahCA//2Q==" alt="" class="w-100 shadow-sm"/>
                    </div>
                    <div class="col-6">
                        <img src="data:image/jpeg;base64,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" alt="" class="w-100 shadow-sm"/>
                    </div>
                    <div class="col-12 mt-4">
                        <p><b>Cause x Passion x Impact</b><br/>
                        </p>
                        <p>ConnectNGO aims to provide comprehensive resource solutions for the social sector by creating symbiosis amongst NGOS, volunteers and corporates, and adding value and structure to these associations.</p>
                        <p><b>VISION</b><br/>
                        </p>
                        <p>ConnectNGO aims to be the biggest platform in India for organizational entities and individuals to work in synergy towards social value creation.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End OF About Section --> */}

{/* <!-- Portfolio Section --> */}
{/* <section id="portfolio" class="section portfolio-section">
    <div class="container">
        <h6 class="section-title text-center">VOLUNTEERING DOMAINS</h6>
        <h6 class="section-subtitle mb-5 text-center">Explore Opportunities that interest you!!</h6>
        <div class="filters">
            <a href="#" data-filter=".new" class="active">
                ALL
            </a>
            <a href="#" data-filter=".advertising">
                Food
            </a>
            <a href="#" data-filter=".branding">
                Health
            </a>
            <a href="#" data-filter=".web">
                EDUCATION
            </a>
        </div>
        <div class="portfolio-container">
            <div class="col-md-6 col-lg-4 web new">
                <div class="portfolio-item">
                    <img src="https://i.pinimg.com/originals/89/d2/df/89d2df3b22deb8589bbbc0b3dbab5b88.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="https://www.coe.int/documents/6814332/10186017/grants+women+NGO.jpg/6f82cafd-58e3-f7bd-e4fb-aa408456dae1"></a>
                        <div class="text-holder">
                            <h6 class="title">EDU</h6>
                            <p class="subtitle">DIL KHUSH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 web new">
                <div class="portfolio-item">
                    <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">EDU</h6>
                            <p class="subtitle">MUSKURAHAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 advertising new">
                <div class="portfolio-item">
                    <img src="https://imgmedia.lbb.in/media/2019/11/5dca970153703c2f98a11c72_1573558017041.JPG" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="https://imgmedia.lbb.in/media/2019/11/5dca970153703c2f98a11c72_1573558017041.JPG"></a>
                        <div class="text-holder">
                            <h6 class="title">FOOD</h6>
                            <p class="subtitle">SPARSH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 web">
                <div class="portfolio-item">
                    <img src="https://static.collegedekho.com/media/uploads/2016/08/19/teach-for-india.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/web-4.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">EDU</h6>
                            <p class="subtitle">LEARN N TEACH</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 advertising">
                <div class="portfolio-item">
                    <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/15/Pictures/_87112c3e-21bb-11e7-89d6-c3c500e93e5a.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/15/Pictures/_87112c3e-21bb-11e7-89d6-c3c500e93e5a.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">FOOD</h6>
                            <p class="subtitle">ROTI BANK</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 web new">
                <div class="portfolio-item">
                    <img src="https://d1ns4ht6ytuzzo.cloudfront.net/oxfamdata/oxfamdatapublic/styles/news_detail_748x373/public/blogimages/education.jpg?itok=WcwNyx8i" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                   <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/web-3.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">EDU</h6>
                            <p class="subtitle">SHIKSHA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 advertising new">
                <div class="portfolio-item">
                    <img src="https://assets.thehansindia.com/h-upload/2020/12/19/1019356-donation.webp" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                   <div class="content-holder">
                        <a class="img-popup" href="https://assets.thehansindia.com/h-upload/2020/12/19/1019356-donation.webp"></a>
                        <div class="text-holder">
                            <h6 class="title">FOOD</h6>
                            <p class="subtitle">ANNAGRAGHAN</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 advertising new">
                <div class="portfolio-item">
                    <img src="https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?w=2000" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/advertising-4.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">FOOD</h6>
                            <p class="subtitle">BHOJAN</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 col-lg-4 branding new">
                <div class="portfolio-item">
                    <img src="https://i.pinimg.com/originals/f0/b0/bf/f0b0bf7d5186dfb805515fc9190601d0.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/branding-1.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">HEALTH</h6>
                            <p class="subtitle">SWASTH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 branding">
                <div class="portfolio-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPJGSTGNQYB_Ib_A5DL2kdea0hZohzvTPEPX10YO5UEDi4WVa8rYl_ssZwQ-_owi7-xI&usqp=CAU" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/branding-2.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">HEALTH</h6>
                            <p class="subtitle">Health n care</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 branding new">
                <div class="portfolio-item">
                    <img src="https://www.tammana.org.in/wp-content/uploads/Event-106.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/branding-3.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">HEALTH</h6>
                            <p class="subtitle">UMEED</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 branding">
                <div class="portfolio-item">
                    <img src="https://thumbs.dreamstime.com/z/health-care-logo-vector-drawing-represents-design-38126076.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/branding-4.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">HEALTH</h6>
                            <p class="subtitle">ANAND</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 branding">
                <div class="portfolio-item">
                    <img src="https://thumbs.dreamstime.com/z/charity-vector-circle-banner-flat-line-icons-donation-nonprofit-organization-ngo-giving-help-illustration-outline-signs-152612385.jpg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                    <div class="content-holder">
                        <a class="img-popup" href="assets/imgs/branding-5.jpg"></a>
                        <div class="text-holder">
                            <h6 class="title">HEALTH</h6>
                            <p class="subtitle">UDAN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End of portfolio section -->  */}

{/* <!-- Blog Section --> */}
<section class="section" id="blog">
    <div class="container">
        <h6 class="section-title mb-0 text-center">Explore Opportunites</h6>
       <br/>

        <div class="row">
            <div class="col-md-4">
                <div class="card border-0 mb-4">
                    <img src="https://media.istockphoto.com/photos/graphic-designer-drawing-on-graphics-tablet-at-workplace-picture-id865230556?k=20&m=865230556&s=612x612&w=0&h=yaMgJpncw6ngPbwm9Z25bMBK3PZ42lVO5z7dZUojiew=" alt="" class="card-img-top w-100"/>
                    <div class="card-body">
                        <h6 class="card-title">Graphic designing volunteer</h6>
                        <p>Shree Arbuda foundation</p>
                        <p class="date">01 April 2023 - 01 june 2023</p>
                        <a href="article.html">Go To The Article</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 mb-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcihzZJ1R1-Tmihdv4xuTGdieree57qAM6YH2v-eStw&s"/>
                    <div class="card-body">
                        <h6 class="card-title"> Teaching volunteer</h6>
                        <p>Shiksha foundation.</p>
                        <p class="date">22 October 2022 - 22 December 2022</p>
                        <a href="article.html">Go To The Article</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 mb-4">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" alt="" class="card-img-top w-100"/>
                    <div class="card-body">
                        <h6 class="card-title">Web developer</h6>
                        <p>Third eye</p>
                        <p class="date">15 November 2022 - 15 December 2022</p>
                        <a href="article.html">Go To The Article</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <style>
.date{
color: rgb(5, 5, 122);
}
</style> */}
{/* <!-- End of Blog Section --> */}

{/* <!-- Testmonial Section --> */}
<section class="section" id="testmonial">
    <div class="container">
        <h6 class="section-title text-center mb-0">TEAM</h6><br/><br/>

        <div class="row">
            <div class="col-md-4 my-3 my-md-0">
                <div class="card">
                    <div class="card-body">
                        <div class="media align-items-center mb-3">
                            <img class="mr-3" src="https://m.media-amazon.com/images/I/819nmWETo8L.png" alt=""/>
                            <div class="media-body">
                                <h6 class="mt-1 mb-0">Srijita patra</h6>
                                <small class="text-muted mb-0">Business Analyst</small>
                            </div>
                        </div>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 my-3 my-md-0">
                <div class="card">
                    <div class="card-body">
                        <div class="media align-items-center mb-3">
                            <img class="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIYltbk9ZduTgx9tEcGwNITGGu3oo_Wy8MedRKLSFLY-ytFp3kiAbUMlotapTQvMxkKI&usqp=CAU" alt=""/>
                            <div class="media-body">
                                <h6 class="mt-1 mb-0">Renu Nanadikar</h6>
                                <small class="text-muted mb-0">Web Developer</small>
                            </div>
                        </div>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 my-3 my-md-0">
                <div class="card">
                    <div class="card-body">
                        <div class="media align-items-center mb-3">
                            <img class="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iSFkAvLnchd9LL8cdC0hsty-8kZ0guLTNqka7xA6x_2Q_l789hmVHQTfHf5l33m2J_I&usqp=CAU" alt="" />
                            <div class="media-body">
                                <h6 class="mt-1 mb-0">Athsa Devraj</h6>
                                <small class="text-muted mb-0">Public Relation Head</small>
                            </div>
                        </div>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End of Testmonial Section --> */}

{/* <!-- Contact Section --> */}
<section id="contact" class="section has-img-bg pb-0">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-5 my-3">
                <h6 class="mb-0">Phone</h6>
                <p class="mb-4">7446738226</p>

                <h6 class="mb-0">Address</h6>
                <p class="mb-4">12345 highland, Mumbai</p>

                <h6 class="mb-0">Email</h6>
                <p class="mb-0">info@website.com</p>
                <p></p>
            </div>
            <div class="col-md-7">
                <form>
                    <h4 class="mb-4">Drop Us A Line</h4>
                    <div class="form-row">
                        <div class="form-group col-sm-4">
                            <input type="text" class="form-control text-white rounded-0 bg-transparent" name="name" placeholder="Name"/>
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="email" class="form-control text-white rounded-0 bg-transparent" name="Email" placeholder="Email"/>
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="text" class="form-control text-white rounded-0 bg-transparent" name="subject" placeholder="Subject"/>
                        </div>
                        <div class="form-group col-12">
                            <textarea name="message" id="" cols="30" rows="4" class="form-control text-white rounded-0 bg-transparent" placeholder="Message"></textarea>

                        </div>
                        <div class="form-group col-12 mb-0">
                            <button type="submit" class="btn btn-primary rounded w-md mt-3">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>


</body>
</>
)
}

