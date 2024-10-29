# npm run build
scp -r ./out/* aws-main:~/ecomLandingPage

ssh aws-main << EOF
    sudo scp -r ~/ecomLandingPage/* /var/www/ecomLandingPage
EOF

